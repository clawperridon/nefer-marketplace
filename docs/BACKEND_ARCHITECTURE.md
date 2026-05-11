# Nefer Marketplace - Backend Architecture

## Overview

Nefer Marketplace is a premium two-sided fashion marketplace connecting emerging fashion brands with discerning customers. This document defines the backend architecture for scalability, security, and future growth.

## Database Entities

### Core Tables

1. **profiles** - User profile base table
2. **customers** - Customer-specific data (extends profile)
3. **sellers** - Seller-specific data with approval status
4. **brands** - Brand profiles (belongs to seller, needs approval)
5. **products** - Product catalog (belongs to brand, needs approval)
6. **product_variants** - Individual sizes/colors with inventory
7. **carts** - Customer shopping cart
8. **cart_items** - Items in cart
9. **orders** - Customer orders
10. **order_items** - Individual line items in orders
11. **addresses** - Shipping/billing addresses
12. **seller_applications** - Seller signup applications
13. **admin_audit_log** - Admin action audit trail

---

## User Roles

| Role | Description | Access Level |
|------|-------------|--------------|
| `customer` | Shopper | Own profile, cart, orders |
| `seller` | Brand owner | Own brand, products, orders |
| `admin` | Platform admin | Approve sellers/brands/products, view all |

### Role Assignment Rules
- Signup with no role → `customer`
- Seller application submitted → `seller` with `pending` status
- Admin approval → `seller` with `approved` status
- `admin` role - manual assignment ONLY in Supabase dashboard

---

## Authentication Flow

```
Customer Signup:
  1. User submits email/password via Supabase Auth
  2. Auth creates user in auth.users
  3. Trigger creates profile with role 'customer'
  4. Email confirmation (Supabase handles)

Seller Signup:
  1. User submits seller application form
  2. Application saved to seller_applications
  3. Profile created with role 'seller' (restricted)
  4. Status = 'pending'
  5. Admin reviews in dashboard
  6. Approved → seller record + brand can be created

Login:
  1. Supabase Auth sign in
  2. JWT returned
  3. Frontend uses JWT for API calls
  4. RLS policies enforce permissions
```

---

## Seller Onboarding Flow

```
Step 1: Submit Application
  - Brand name
  - Founder name
  - Email
  - Website (optional)
  - Instagram (optional)
  - Country
  - Category (apparel, accessories, etc.)
  - Brand description
  → Saved to seller_applications

Step 2: Admin Review (via Dashboard)
  - Admin reviews application
  - Approve or Reject
  - Notes added
  → Status updated

Step 3: Brand Creation (after approval)
  - Seller creates brand profile
  - Brand status = 'pending'
  - Admin approves brand
  → Brand visible publicly

Step 4: Product Creation
  - Seller adds products
  - Product status = 'pending'
  - Admin approves product
  → Product visible in shop
```

---

## Product & Brand Flow

```
Brand:
  seller → creates brand → status: pending → admin approves → status: active

Product:
  brand → creates product → status: pending → admin approves → status: active
  
Product Variant:
  product → creates variant (size/color) → inventory tracked

Public Visibility:
  - Only status = 'active' brands visible
  - Only status = 'active' products visible
  - All variants shown
```

---

## Cart & Order Flow

```
Cart:
  1. Customer logs in → creates/retrieves cart
  2. Add item → cart_items with quantity
  3. Update quantity → recalculate total
  4. Remove item → delete cart_item
  5. Total = SUM(cart_items.quantity × unit_price)

Checkout:
  1. Customer reviews cart
  2. Adds shipping address
  3. Submits order
  4. Order created with status 'pending'
  5. Order items created from cart items
  6. Cart cleared or marked completed
  7. NO payment processed yet

Order Status:
  - pending → confirmed → shipped → delivered
  - cancelled (by admin)
```

---

## Security Model

### Row Level Security (RLS)

| Table | Public Read | Auth Read | Auth Write | Admin Write |
|-------|-----------|----------|----------|-----------|
| profiles | ❌ | own | own | ✓ |
| customers | ❌ | own | own | ✓ |
| sellers | own | own | own | ✓ |
| brands | active only | own | own | ✓ |
| products | active only | own | own | ✓ |
| product_variants | active only | own | own | ✓ |
| carts | ❌ | own | own | ✓ |
| cart_items | ❌ | own | own | ✓ |
| orders | ❌ | own | own | ✓ |
| order_items | ❌ | own | own | ✓ |
| addresses | ❌ | own | own | ✓ |
| seller_applications | ❌ | ✓ (create) | own | ✓ |
| admin_audit_log | ❌ | admin | admin | ✓ |

### Service Role Key
- NEVER exposed to client
- Server-side operations only
- Admin functions use service role
- Stored in environment variable: `SUPABASE_SERVICE_ROLE_KEY`

---

## Future Integrations (Not Implemented Yet)

### Stripe Payment Model
```sql
-- Add when implementing payments:
orders:
  - stripe_payment_intent_id
  - payment_status: pending | paid | failed | refunded
  - paid_at

order_items:
  - seller_payout_amount (after commission)
  
sellers:
  - stripe_account_id
  - payout_bank_account
  - commission_rate
```

### Commission Model
```sql
-- Future tables:
commissions:
  - order_id
  - seller_id
  - gross_amount
  - commission_percentage
  - commission_amount
  - net_payout

payouts:
  - seller_id
  - amount
  - status: pending | processing | paid
  - stripe_transfer_id
  - processed_at
```

### Seller Payout Model
```sql
-- Payout tracking:
payouts:
  - seller_id
  - period_start
  - period_end
  - total_sales
  - total_commission
  - net_amount
  - status
  - stripe_transfer_id
```

---

## Storage Structure

```
supabase-storage/
├── brands/
│   └── {brand_id}/
│       ├── logo/
│       └── hero/
├── products/
│   └── {product_id}/
│       └── images/
└── avatars/
    └── {user_id}/
```

---

## API Routes Structure

```
/api/
├── auth/
│   ├── signup
│   ├── login
│   └── logout
├── sellers/
│   ├── apply (POST)
│   ├── dashboard (GET)
│   └── products (CRUD)
├── products/
│   ├── list (GET)
│   └── detail (GET)
├── cart/
│   ├── get (GET)
│   ├── add (POST)
│   ├── update (PUT)
│   └── remove (DELETE)
├── orders/
│   ├── create (POST)
│   └── list (GET)
└── admin/
    ├── sellers (approve/reject)
    ├── brands (approve/reject)
    ├── products (approve/reject)
    └── orders (manage)
```

---

## Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx
SUPABASE_SERVICE_ROLE_KEY=xxx (server-side only)

# Future:
STRIPE_SECRET_KEY=xxx
STRIPE_WEBHOOK_SECRET=xxx
```

---

## Scaling Considerations

1. **Database**: Use connection pooling for high traffic
2. **CDN**: Supabase Storage + CloudFront for images
3. **Caching**: Redis for cart session data
4. **Search**: Consider Algolia for product search
5. **Email**: SendGrid or Resend for transactional emails

---

## Implementation Priority

1. Schema + RLS (Sprint Backend 3-4)
2. Auth + Roles (Sprint Backend 5)
3. Seller Onboarding (Sprint Backend 6)
4. Products/Brands (Sprint Backend 7)
5. Cart/Orders (Sprint Backend 8)
6. Admin (Sprint Backend 9)

---

*Last Updated: 2026-05-11*
*Status: Ready for implementation*