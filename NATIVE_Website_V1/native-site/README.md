# NATIVE Website

Multilingual Next.js App Router site for NATIVE. The approved interface uses an off-white/black editorial system and supports German, English, and Simplified Chinese.

## Setup and commands

Use Node.js 20+ and the committed pnpm lockfile.

1. `pnpm install`
2. `pnpm dev`
3. Open `http://localhost:3000` (redirects to `/en`).

Quality checks: `pnpm typecheck` and `pnpm build`. Run the production server with `pnpm start` after building. No lint tool is currently configured.

For deployment, set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin with no trailing slash. This makes sitemap, robots, canonical, and social URLs production-correct.

## Locales and routes

Locales are declared in `lib/i18n.ts`. Public content routes are `/de`, `/en`, and `/zh`, plus `creators`, `brands`, `services`, `cases`, `about`, and `contact` below each locale. Legal placeholders use `/de/impressum`, `/de/datenschutz`, `/en/legal-notice`, `/en/privacy`, `/zh/legal-notice`, and `/zh/privacy`.

Page copy lives in the matching file under `lib/` (`home.ts`, `creators.ts`, and so on). To add a page, add localized typed data, create `app/[locale]/<route>/page.tsx`, include localized metadata/canonical/hreflang, and update shared navigation only when appropriate. To add a locale, update the locale union, every copy source, static params, metadata alternates, sitemap, language switcher, and locale typography QA.

## Cases

`lib/cases.ts` contains reusable `CaseSlot` and future `CaseDetailData` contracts. `components/CaseCard.tsx` renders public placeholders. Add real case data only after it can be verified; then introduce `app/[locale]/cases/[slug]/page.tsx` using the detail contract and include only published cases in navigation and the sitemap.

## Contact form and future integrations

The contact flow is client-side and retains data across its three steps. `ContactSubmissionHandler` is the boundary for a future API or CRM. No backend or delivery confirmation exists today, so production submission remains disabled and no success state is shown. Analytics, newsletter, and CMS integrations are intentionally absent; add them only when selected, and review consent/privacy requirements at that time.

## Deployment and launch requirements

Vercel can build the project with `pnpm build`. Before public launch, supply the final domain, real contact email, verified form backend, complete company/legal details, and a service-specific privacy policy. The current OG image and icons are branded launch-safe placeholders and can be replaced later. Real cases and founder media remain optional content additions; never substitute invented material.
