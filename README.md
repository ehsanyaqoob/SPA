# Ehsan Yaqoob: Portfolio

Personal portfolio of a mobile developer (native iOS and Flutter). Live at [ehsanyaqoob.com](https://ehsanyaqoob.com).

Built with Next.js, TypeScript, and Tailwind CSS, and exported as a static site.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Change the content

Almost everything lives in [`site.config.ts`](site.config.ts): personal details, projects, skills, links, and SEO. Its header explains the rules and where each change goes.

## Check it

```bash
npm run typecheck
npm run lint
npm run build
```

`npm run build` writes the static site to `out/`. Stop `npm run dev` first, since both use the `.next` folder.
