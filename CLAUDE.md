@AGENTS.md

# Dogear Frontend — Project Rules

Client feedback & approval tool for freelancers/agencies. Next.js 16 (App Router, Turbopack), React 19, Tailwind 4, TypeScript strict.
**Read `node_modules/next/dist/docs/` before using any Next API** (see AGENTS.md — this is not the Next you know).

## Workflow — follow on EVERY task (Principal Engineer mode)
**Before editing anything on a new feature or non-trivial task:**
1. **Inspect** the relevant files first (design frames, existing components, types/data/services) and understand how the related feature already works.
2. **Explain the approach** — a concise plan in 3–5 bullets — and **wait for the user's confirmation** before editing files. Ask whenever copy, behaviour, architecture or naming is unclear; never guess silently.
   *Small tweaks (spacing, colour, copy, one-line fixes the user asked for directly) may proceed without a plan.*

**Then implement:**
3. Check the design source before building a screen (see "Design source").
4. Reuse before creating: look in `src/components` for an existing atom/molecule/organism/template.
5. Put copy/data in `src/data` — never in JSX (see "No hardcoded data").
6. Follow the architecture below; keep existing coding conventions, formatting (Prettier) and lint rules. Don't change core public API signatures (component props, service/type shapes) unless the task explicitly requires it.

**Then verify:**
7. Run `npm run typecheck && npm run lint && npm run build` and `npm test`. Report failures honestly — never claim a check passed that wasn't run.
8. Tests: new logic gets unit tests (Vitest + Testing Library) covering the success path **and** edge cases (validation errors, empty data, disabled states). *No tests are written yet — add them with the next feature.*
9. Keep commits granular and logical (one concern per commit). Commit only when asked.
10. Update this file if you change architecture, add a library or add a convention.

## Architecture — folder structure (follow this)
```
src/
  app/                          Routes only. Thin: fetch via services → render a template. No copy, no markup logic.
    layout.tsx                  Root: fonts, MotionProvider, <html>/<body>
    (web)/                      Public pages. layout.tsx wraps ALL of them in <PublicLayout> once.
      page.tsx                  Home  (/)
      features/ pricing/ about/ contact/   each: page.tsx
    (auth)/                     layout.tsx wraps all in <AuthLayout> (illustration panel + content); login/  sign-up/  forgot-password/
  components/
    atoms/                      Button, Badge, Heading, Text, Eyebrow, Logo, Card, Container, Chip, Pin, Section, Decor, Reveal, Stagger, ScrollProgress, BackToTop…
    molecules/                  SectionHeader, NavTabs, FeatureCard, PlanCard, FaqEntry, PersonCard, StepCard, RecordRow, FormField, Floater, CanvasMock, BrowserFrame…
    organisms/                  Sections: Hero, SiteHeader, SiteFooter, CtaBanner, FeatureTour, PlanSwitcher, FaqSection, ContactForm…
      AuthLayout/index.tsx      Shared auth shell: illustration panel (left) + page content (right)
      PublicLayout/index.tsx    Shared public chrome: background + header + CTA + footer + progress + back-to-top
    templates/                  One FOLDER per page body, each `index.tsx`: HomeTemplate, FeatureTemplate, PricingTemplate, AboutTemplate, ContactTemplate, AuthTemplate
  types/                        ALL TypeScript types (content.ts = shared UI shapes; home.ts, features.ts, … = per-page content). Import from "@/types".
  schemas/                      zod schemas (contact.ts). Import from "@/schemas".
  data/                         Dummy CMS content per page (home.ts, features.ts, …). Import from "@/data".
  initial-values/               FORM initial values only (contact.ts). Import from "@/initial-values".
  services/                     Async getters (getHomeContent…) → lib/cms `fetchContent(initialValue)`. Import from "@/services".
  forms/<name>/                 Form glue (contact/, auth/): server `actions.ts` + client `*Container.tsx` binding schema + initial values + action to the presentational organism.
  lib/                          cn(), cms.ts, motion.ts
  styles/                       colors.css, typography.css
  test/                         Vitest setup
```
Flow for a page: `route page.tsx` → `services/getXContent()` (reads `data/x.ts`, typed by `types/x.ts`) → `XTemplate content={…}` → organisms → molecules → atoms.
Dependency direction: `atoms ← molecules ← organisms ← templates ← app`. Never import upward. Components import only types (`@/types`), never services/data/initial-values. Forms are bound in `src/forms` and passed to templates as a slot.
There is **no `features/` folder** — don't recreate it.

### Data flow (one direction)
```
┌────────────────────────────────┐
│ services/  (async getters)     │  ← reads data/ today; a real CMS/API later (lib/cms.ts)
└───────────────┬────────────────┘
                │ typed data
                ▼
┌──────────────────────────────────────────────────────┐
│ app/(web)/<page>/page.tsx   (RSC route)              │
│  - calls the service                                 │
│  - renders the page's Template                       │
└───────────────┬──────────────────────────────────────┘
                │ content props
                ▼
┌──────────────────────────────────────────────────────┐
│ components/templates/<Page>Template/index.tsx (RSC)  │
│  - assembles organisms in design order               │
└───────────────┬──────────────────────────────────────┘
                │ primitive props
                ▼
┌──────────────────────────────────────────────────────┐
│ components/organisms/ → molecules/ → atoms/          │
│  - pure UI: zero copy, zero data fetching            │
└──────────────────────────────────────────────────────┘
```
Chrome (header/footer/CTA) is not in the page: `app/(web)/layout.tsx` → `PublicLayout`; `app/(auth)/layout.tsx` → `AuthLayout`.


## Layout rule
Public pages get their chrome from `app/(web)/layout.tsx` → `PublicLayout`. Auth pages get theirs from `app/(auth)/layout.tsx` → `AuthLayout`. Pages and templates never wrap themselves.

## No hardcoded data (hard rule)
- No user-visible string, list, price, name or link in a component. Components take **props**.
- Dummy CMS data lives in `src/data/<page>.ts`, typed in `src/types/<page>.ts`, exposed via `src/services/<page>.ts`.
- Going live = replace the body of `lib/cms.ts` / the services with a real CMS client. Pages and components must not change.
- Only non-content UI chrome (aria labels' icon choice) may be inline.

## Design source
Designs are HTML exports (extracted outside the repo; user holds the zips `dogear-all-pages.zip` / `dogear-html-by-page.zip` — identical 105 frames, 8 groups):
website (Home, Features, Pricing, About, Contact) · app (designer dashboard) · client (review portal + emails) · admin · foundations/style guide · responsive (tablet/mobile variants of each).
Build order: **website → client portal → designer app → admin**. Match the designs; ask if a frame is ambiguous.

## Design tokens, typography & theming (dark only today, theme-ready)
- **Colours** are CSS variables in `src/styles/colors.css` (`--dg-*`). `tailwind.config.ts` maps them to utilities (`bg-canvas`, `text-ink-muted`, `border-line`, `text-amber`, `bg-mock-cream`…). **Never use raw hex in components.** To add a theme, override the same variables under `[data-theme="light"]` — no component changes.
- **Type scale** lives in `src/styles/typography.css` as fluid `clamp()` variables (`--fs-display` 72px … `--fs-micro` 12px). Utilities: `text-display, h1–h5, body-xl/lg/body/body-sm, caption, micro, eyebrow, stat`. Tune responsiveness there only; don't use ad-hoc `text-[..px]`.
- **Tailwind config**: `tailwind.config.ts` (loaded via `@config` in `globals.css`) holds breakpoints, font families (Sora display, DM Sans body, JetBrains Mono, Georgia serif for mock sites), colour/size names, keyframes.
- **GOTCHA:** `src/lib/cn.ts` registers the custom font-size names with tailwind-merge. If you add a size in the config, add it there too, or `cn("text-h2","text-ink")` will silently drop the size.
- Content width 1120px (`Container` = 1168px incl. 24px gutters).

## Motion (framer-motion)
Tokens in `src/lib/motion.ts` (ease, spring, viewport). `MotionProvider` (in layout) sets `reducedMotion="user"`. Primitives: `Reveal` (fade/slide in; `immediate` for above-the-fold), `Stagger`/`StaggerItem`, `Lift`, animated `Button`, `Pin` pop-in, floating `Decor`, nav `NavTabs` (sliding active pill via `layoutId`, active tab from `usePathname`). FAQ accordion uses Radix + CSS keyframes. Use these — don't write one-off animations.

## Hydration safety
`<html>`/`<body>` carry `suppressHydrationWarning` (browser extensions inject attributes). Never use `Math.random`, `Date.now`, locale date formatting or `typeof window` branches during render in components.

## Conventions
- Server Components by default; `"use client"` only for interactivity, kept as leaf as possible. Server → client props must be plain serialisable data (no zod schemas/functions except server actions).
- Variants via `class-variance-authority`; merge classes with `cn()` from `@/lib/cn`.
- Forms: react-hook-form + zod (`@hookform/resolvers`); submit through a server action.
- Icons: `lucide-react`. Toasts: `sonner`. Motion: `framer-motion`. Primitives for dialogs/menus/etc: `radix-ui`.
- Client state: `zustand`. Server/cache state: `@tanstack/react-query` (add a provider when first needed).
- Path alias `@/*` → `src/*`. Components `PascalCase.tsx`; one component per file; props typed inline or `Props`.
- Accessibility: semantic landmarks, labelled controls, visible focus (amber outline), contrast on dark.
- Responsive: mobile-first; designs exist for tablet/mobile — match them.
- Format with Prettier (`npm run format`, tailwind plugin sorts classes).
- Custom hooks are prefixed with `use` (e.g. `useScrollLock`) and live in `src/hooks/` (create it when the first one is needed).
- UI components stay pure: no hardcoded copy, no data fetching, primitive/serialisable props only.
- Tests: every new molecule/organism gets a test in a sibling `__tests__/` folder (e.g. `components/molecules/__tests__/PlanCard.test.tsx`) — success path + edge cases. Setup is in `src/test/setup.ts`.
- **Never edit generated/build output:** `.next/`, `dist/`, `node_modules/`. (Delete `.next` only to clear a stale dev cache.)

## Commands
`npm run dev` · `build` · `typecheck` · `lint` · `format` · `test` · `test:watch`
Single test file: `npx vitest run path/to/file.test.tsx`. Full verify: `npm run typecheck && npm run lint && npm test && npm run build`.

## Installed libraries
framer-motion, lucide-react, clsx, tailwind-merge, class-variance-authority, react-hook-form, @hookform/resolvers, zod, zustand, @tanstack/react-query, radix-ui, sonner · dev: prettier (+tailwind plugin), vitest, @vitejs/plugin-react, jsdom, @testing-library/{react,jest-dom,user-event}.

## Status / TODO
- [x] Foundations: tokens, typography.css, tailwind.config, motion layer, atomic structure, PageShell, content/service pattern
- [x] Home page matched closely to design (header pill, hero + product mockup, features, proof grid, pricing, FAQ accordion, CTA band, footer)
- [ ] Features, Pricing, About, Contact pages: structure done, **still need pixel-match pass** against `dogear-website-{2..5}-*-desktop.png`
- [ ] Pricing card limit callout, features tour interactivity
- [ ] Tablet/mobile pass (mobile nav menu, swipe for proof cards — carousel intentionally removed on desktop)
- [x] Auth pages: /login /sign-up /forgot-password (UI + validation; actions are placeholders, Google button is a stub)
- [ ] Nav targets not built: /demo (Portfolio tab removed on request)
- [ ] Client portal, designer app, admin
- [ ] Tests for atoms/organisms
