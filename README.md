# Walnut Health

> Affordable mental healthcare for ambitious professionals.

A production-grade Next.js 15 application for the Walnut Health platform — featuring an AI-powered chat onboarding, therapist matching, peer circles, community, and B2B company portals.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + custom CSS variables |
| Fonts | Instrument Serif (headlines) + DM Sans (body) via Google Fonts |
| Icons | Lucide React |
| Animation | CSS keyframes + Framer Motion (available) |
| Data | Mock data in `lib/mockData.ts` |
| API | Next.js Route Handlers |

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# Edit .env.local as needed

# 3. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Routes

| Route | Description |
|---|---|
| `/` | Landing page — hero, features, stats, testimonials |
| `/onboarding` | AI chat onboarding flow — progressive multi-step intake |
| `/matches` | Match results — therapists, peer circles, group sessions |
| `/community` | Community forum — topics, discussions, trust indicators |
| `/providers` | For coaches & therapists — join the network |
| `/companies` | For employers — B2B wellbeing benefits |
| `/api/matches` | Route handler — returns match recommendations (GET or POST with onboarding answers) |

---

## Architecture

```
walnut-next-app/
├── app/
│   ├── layout.tsx         # Root layout (Navbar + Footer)
│   ├── page.tsx           # Landing page
│   ├── globals.css        # Design tokens, Walnut theme
│   ├── onboarding/
│   │   └── page.tsx       # AI chat onboarding (client component)
│   ├── matches/
│   │   └── page.tsx       # Match results dashboard
│   ├── community/
│   │   └── page.tsx       # Community forum
│   ├── providers/
│   │   └── page.tsx       # Provider portal
│   ├── companies/
│   │   └── page.tsx       # B2B company page
│   └── api/
│       └── matches/
│           └── route.ts   # Match recommendations API
├── components/
│   ├── WalnutLogo.tsx     # SVG logo with wordmark
│   ├── Navbar.tsx         # Sticky header with mobile menu
│   └── Footer.tsx         # Footer with newsletter signup
├── lib/
│   ├── mockData.ts        # All mock data (therapists, circles, etc.)
│   └── utils.ts           # cn() utility (clsx + tailwind-merge)
├── .env.example           # Environment variable template
└── README.md              # This file
```

---

## Design System

Colors (defined as CSS variables in `globals.css`):

| Variable | Value | Usage |
|---|---|---|
| `--color-background` | `#F7F5F0` | Warm off-white main bg |
| `--color-charcoal` | `#1E1C18` | Headlines, dark accents |
| `--color-lime` | `#B8E040` | Primary CTA, highlights |
| `--color-surface-green` | `#E4EBE0` | Muted green surfaces |
| `--color-text-muted` | `#6B6660` | Secondary text |

Typography:
- **Headlines**: Instrument Serif (italic style for display)
- **Body**: DM Sans (300–600 weights)

---

## Path to Production

1. **Auth**: Replace mock with Supabase Auth — add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to `.env.local`
2. **Database**: Add Supabase tables for `users`, `therapists`, `sessions`, `matches`
3. **Real AI onboarding**: Replace simulated typing with OpenAI streaming via `/api/chat`
4. **Payments**: Integrate Stripe for session booking
5. **Notifications**: Add Resend for transactional emails

---

## Build

```bash
npm run build
npm run start
```
