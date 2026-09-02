<!-- BEGIN:nextjs-agent-rules -->

## NATIVE project guardrails

- Home, For Creators, For Brands, Services, Cases, About, and Contact use an approved black/off-white editorial visual system. Do not redesign them without an explicit request.
- Preserve German, English, and Simplified Chinese routes and route-preserving language switching. Treat Chinese typography separately where needed.
- NATIVE is a cross-cultural media, localization, production, and creator/brand services company. Europe ↔ China is the initial corridor, not the global limit.
- Never invent clients, logos, testimonials, metrics, offices, biographies, results, contact details, or legal company information.
- Approved copy lives in `lib/*.ts`. Do not rewrite it except to fix an explicit technical or localization defect.
- Keep placeholders honest. Contact submission has no backend; legal content needs final professional input; case studies must remain marked upcoming until real work exists.
- Prefer server components. Keep browser JavaScript limited to interactions that require it, and add dependencies only when justified.

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
