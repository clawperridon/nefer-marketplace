# Nefer Marketplace

Premium two-sided fashion marketplace for emerging fashion brands.

## Project Vision

Nefer is a premium, luxury, futuristic fashion marketplace connecting emerging brands with discerning customers worldwide.

## Brand Principles

- Premium, luxury, futuristic aesthetic
- Clean, scalable, investor-grade code
- Metallic sand and cosmic blue color palette
- No cheap, cluttered, or playful aesthetic
- Design feels like luxury fashion meets technology and modern editorial

## Tech Stack

- **Frontend**: Next.js (App Router)
- **Database**: PostgreSQL (Supabase)
- **Authentication**: Supabase Auth
- **Styling**: Tailwind CSS
- **State Management**: React Context / Server Components
- **Deployment**: Vercel

## Project Structure

```
nefer-marketplace/
├── src/
│   ├── components/    # Reusable UI components
│   ├── lib/           # Utilities and helpers
│   ├── pages/         # API routes (if needed)
│   ├── styles/        # Global styles
│   ├── types/         # TypeScript definitions
│   └── utils/         # Helper functions
├── config/            # Configuration files
├── docs/             # Documentation
├── scripts/          # Build/deploy scripts
└── tests/             # Test files
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test
```

## Documentation

- [Project State](docs/PROJECT_STATE.md)
- [Current Sprint](docs/CURRENT_SPRINT.md)

## Brand Guidelines

- **Colors**: Metallic sand (#C9A86C), Cosmic blue (#1a2a4a)
- **Typography**: Syne (display), Inter (body)
- **Aesthetic**: Premium, futuristic, editorial

## Security

- Never expose secrets
- Use environment variables
- Validate all inputs
- Follow security best practices

## License

Proprietary - All rights reserved