# John Calvin — Personal Website

Software engineering portfolio for **John Calvin**, a Computer Science student at Monash University Malaysia.

## Stack

- [Next.js](https://nextjs.org) (App Router) with static export (`output: "export"`)
- TypeScript
- Tailwind CSS

## Features

- A hero that introduces me, what I’m looking for, and a portrait
- Project cards with metrics, code snippets, and expandable architecture notes
- A timeline of roles, awards, and certifications
- One-click copy email, with a small toast so you know it worked

## Project structure

```
app/           # layout, page, global styles
components/    # Header, Hero, Projects, Experience, Footer, modals
content/       # typed portfolio copy
public/        # static assets
```

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # writes static site to out/
npm run lint
```

## License

Personal portfolio — content and branding are mine. Feel free to fork the structure for your own site.