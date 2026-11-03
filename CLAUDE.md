# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # dev server on http://localhost:3000
npm run build      # static export to out/
npm run lint       # next lint (next/core-web-vitals)
npm run typecheck  # tsc --noEmit
```

There is no test framework or test script. Verify changes with `typecheck`, `lint`, and `build`.

`next build` skips ESLint (`ignoreDuringBuilds: true`), so a passing build does not mean lint is clean. Run `npm run lint` separately.

## Architecture

Personal portfolio for a mobile developer, built with Next.js 13.5 App Router, TypeScript, and Tailwind. Sections render as server components. Only `Navbar`, `TerminalOverlay`, `ResumeMenu`, `ProjectForm`, `CopyEmailButton`, and `NexusBackground` are client components, so keep page content out of client components to preserve it in the exported HTML.

### Static export

`next.config.js` sets `output: 'export'`, which constrains everything:

- No API routes, server actions, middleware, or request-time rendering.
- Any new dynamic route needs `generateStaticParams`.
- `images.unoptimized` is on, so `next/image` does no resizing. Image file size in `public/` is what users download.
- `trailingSlash: true` is on, so internal links use a trailing slash (`/projects/${id}/`).

### Routes

- `app/layout.tsx` renders `Navbar` and `Footer` around every page.
- `/` (`app/page.tsx`): composes the sections in `components/sections/`. Section ids, navigation labels, and headings all come from `sections` in `site.config.ts`.
- `/projects/[id]/`: a case study generated for each project.

### Content

`site.config.ts` in the repo root is the single source of truth. Read its header first: it holds the site's purpose, content rules, and a guide to where each change goes. All facts, copy, links, and SEO values live there, and components only read from it. Never hardcode a name, role, email, URL, or skill in a component.

- `Project.id` is a URL slug, so adding a project creates its route at build time.
- Project links go through `components/ProjectLinks.tsx`.
- Project mockups are portrait frames in `public/frames/`, 720px wide.
- Hand-drawn marks come from `components/Sketch.tsx`. Each section uses a different one.

### Styling

- The theme is dark only, over the moving canvas in `components/NexusBackground.tsx`. Color tokens are CSS variables in `app/globals.css`, exposed as Tailwind colors (`paper`, `surface`, `ink`, `muted`, `line`, `accent`, `accent-soft`, `accent-text`). Use these instead of literal colors.
- Fonts come from `next/font` in `app/layout.tsx`: `font-display` (Fraunces) for headings and `font-sans` (Instrument Sans) for text, and `font-hand` (Caveat) for short handwritten notes.
- The `@/` import alias maps to the repo root.

### Contact form

The site has no backend, so `components/ProjectForm.tsx` (a modal opened from the Contact section) posts from the browser to Web3Forms using `contactSection.formKey` in `site.config.ts`. That key is public by design. While it is empty, submitting opens the visitor's mail app instead.
