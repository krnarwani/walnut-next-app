# Walnut Health — Build Notes

## Summary

Full Next.js 15+ App Router application built for Walnut Health — a mental health matchmaking platform for ambitious professionals.

## Build Results

### `npm install`
✅ Clean install. 61 packages, 0 vulnerabilities.

### `npm run dev`
✅ Dev server starts on port 3000 in ~1.2s (webpack mode).
- Note: Pass `--webpack` flag to avoid Turbopack's styled-jsx detection false positive when running from workspace root with multiple lockfiles.

### `npm run build`
✅ Production build compiles successfully in ~5s.
- All 8 routes compiled
- 6 static pages (pre-rendered at build time)
- 1 dynamic API route (`/api/matches`)
- 0 TypeScript errors
- 0 build warnings (beyond root-detection advisory)

## Routes & Status

| Route | Type | HTTP | Notes |
|---|---|---|---|
| `/` | Static | 200 | Landing page, full sections |
| `/onboarding` | Static | 200 | AI chat flow, client component |
| `/matches` | Static | 200 | Therapist + peer + group matches |
| `/community` | Static | 200 | Forum topics, posts, sidebar |
| `/providers` | Static | 200 | Provider join page |
| `/companies` | Static | 200 | B2B pricing + case studies |
| `/api/matches` | Dynamic | 200 | POST and GET endpoints |

## Architecture Notes

- **App Router** with Server Components for most pages (no unnecessary client boundaries)
- **Client components** marked explicitly: `Navbar`, `Footer`, `WalnutLogo`, `OnboardingPage`
- **No styled-jsx** — all styles in `globals.css` (CSS variables + utility classes) and inline `style={{}}`
- **No localStorage/sessionStorage** — all state in React `useState`
- **Mock data** centralized in `lib/mockData.ts`
- **Path to Supabase**: Add credentials to `.env.local` from `.env.example`

## Known Issues / Notes

1. **Turbopack + multiple lockfiles warning**: Running `next dev` from a repo with multiple `package-lock.json` files triggers a workspace-root detection warning. Use `npm run dev -- --webpack` to suppress. Does not affect functionality.

2. **Google Fonts loading**: `@import url()` must precede `@import "tailwindcss"` in CSS — this is already correctly ordered in `globals.css`.

3. **Onboarding chat**: The AI assistant messages appear with a simulated typing delay. The typing animation is CSS-based for zero-dependency performance. In production, replace with OpenAI streaming via a server action + `useEffect`.

4. **styled-jsx removal**: Next.js 15+ App Router Server Components do not support styled-jsx. All animation keyframes and component-scoped styles are in `globals.css` with descriptive class names.

## Investor Demo Tips

- Start at `/` — strong hero section matching the Walnut brand reference
- Navigate to `/onboarding` — select "Work stress & burnout" and complete all steps to see the full chat flow
- After completing, click "View my matches" to see `/matches` — note the "Best Match" therapist card
- Check `/community` for the trust indicators and discussion topics
- Check `/companies` for the pricing tiers and case studies

## Commands

```bash
npm install          # Install dependencies
npm run dev -- --webpack   # Start dev server (webpack mode)
npm run dev          # Start dev server (turbopack mode, may show advisory)
npm run build        # Production build
npm run start        # Start production server (after build)
```
