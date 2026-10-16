# CLAUDE.md

Portfolio website for Casper Zielinski. See [README.md](./README.md) for the full project description, live demo link, and featured projects overview.

Readme: @README.md

---

## Tech Stack

- **Next.js 15** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS** + **shadcn/ui** (component library)
- **next-intl** — i18n, 3 locales: `en`, `de`, `pl`
- **next-themes** — dark/light theme, system default
- **motion/react** (Framer Motion) — animations
- **Geist Sans/Mono** + **Playfair Display** + **Bebas Neue** — fonts
- **EmailJS** — contact form (no backend needed)
- **Vercel Analytics** — deployed on Vercel
- **Prettier** — auto-runs on every `.ts`/`.tsx` file edit via Claude Code hook

---

## Folder Structure

```
app/[locale]/
├── page.tsx                  # Main single-page portfolio (all sections)
├── layout.tsx                # Root locale layout (fonts, ThemeProvider, NextIntlClientProvider)
├── projects/page.tsx         # /projects route
├── certificates/page.tsx     # /certificates route
├── info/                     # Static data (no translations)
│   ├── projects.ts           # projectCards[] with featured flag
│   ├── certificates.ts       # certificateCards[] with featured flag
│   ├── skills.ts
│   ├── github.ts
│   └── sections.ts           # nav section ids
├── hooks/                    # Data hooks (combine info/ data with translations)
│   ├── useProjectsCards.ts   # useProjectsCards() + useAllProjectsCards()
│   ├── useCertificatesCards.ts # useCertificatesCards() + useAllCertificatesCards()
│   ├── useGitHubCards.ts
│   └── ThemeProviderContext.tsx
└── layout/                   # Page-level components (sections + full pages)
    ├── NavSection.tsx
    ├── Herosection.tsx
    ├── AboutSection.tsx
    ├── ProjectsSection.tsx   # Uses useProjectsCards() — featured only
    ├── ProjectsPage.tsx      # Uses useAllProjectsCards() — full /projects page
    ├── CertificatesSection.tsx # Uses useCertificatesCards() — featured only
    ├── CertificatesPage.tsx  # Uses useAllCertificatesCards() — full /certificates page
    ├── SkillSection.tsx
    ├── GitHubSection.tsx
    ├── ContactSection.tsx
    └── Footer.tsx

components/        # Shared reusable components (CvViewer, NavLink, etc.)
messages/          # Translation files: en.json, de.json, pl.json
utils/             # openInNewTab.ts, sendEmail.ts
i18n/request.ts   # next-intl config, exports locales array
middleware.ts      # next-intl routing, localePrefix: "always"
```

---

## Data Pattern

All content follows a strict three-layer pattern:

1. **`info/*.ts`** — static data only (URLs, image paths, booleans, tech arrays). No translated text. Each entry has a `key` that maps to a translation namespace.
2. **`hooks/use*Cards.ts`** — combines static data with `useTranslations()`. Returns typed, translated objects ready for rendering. Exposes two variants: one for the home section (filtered by `featured: true`) and one for the full page (all entries).
3. **`layout/*.tsx`** — renders using the hook output. No raw data here.

When adding new items (project, certificate, etc.):
- Add the static config to `info/*.ts` — set `featured: true/false`
- Add translation entries to all three `messages/*.json` files
- De and Pl can use English text temporarily — mark them for translation later

---

## Routing & i18n

- All routes are under `app/[locale]/` — locale is always present in the URL (`/en`, `/de`, `/pl`)
- Default locale: `en` — but the prefix is always shown (`localePrefix: "always"`)
- To link to a sub-page: `href={\`/${locale}/certificates\`}` — always prefix with locale from `useLocale()`
- Translation keys live in `messages/{locale}.json` — namespace matches the section (e.g. `certificates.items.claudeCode101.title`)

---

## Design Conventions

- **Animations**: `motion/react` (`motion.div`) with `whileHover`, `whileTap`, `initial/whileInView`. Card hover: `scale: 1.01`, button hover: `scale: 1.02, translateY: -2`. Keep effects subtle.
- **Cards**: `bg-primary/20 dark:bg-black/60`, `hover:shadow-xl`, `transition-shadow`, image scales on group hover with `group-hover:scale-105`
- **Sections**: full-width, `py-20`, centered content with `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **"View All" links**: plain underlined text link below the section grid, same pattern as ProjectsSection and CertificatesSection
- **Full pages** (ProjectsPage, CertificatesPage): `pt-32 pb-20`, fade-in `motion.main`, back-to-home link with `ArrowLeft` icon at top-left

---

## External Links

All external links must open in a new tab:

```tsx
<a href={url} target="_blank" rel="noopener noreferrer">
```

Use `target="_blank"` on: project links, GitHub links, badge/certificate links, profile links.  
**Exception**: `<a href={pdf} download>` — PDF downloads stay as-is (no new tab).  
For programmatic navigation use `openInNewTab(url)` from `utils/openInNewTab.ts`.
