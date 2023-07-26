# Astro / Tailwind project playground customized for use by Ezoic

An Ezoic marketing project folder with custom config for use as a front-end marketing site with connections that easily link our products and content.

## Dependencies or Integrations Included:

    "@astrojs/image": "^0.13.0",
    "@astrojs/tailwind": "^3.1.1",
    "@tailwindcss/forms": "^0.5.3",
    "@tailwindcss/line-clamp": "^0.4.2",
    "@tailwindcss/typography": "^0.5.9",
    "@types/alpinejs": "^3.7.1",
    "astro": "^2.1.7"
    "@astrojs/mdx": "^0.14.0",
    "@astrojs/rss": "^2.3.1",
    "@astrojs/sitemap": "^1.0.0",
    "@astrolib/seo": "^0.3.0",
    "astro-compress": "^1.1.25",
    "tailwind-scrollbar-hide": "^1.1.7"

## Structure

Here's the main folders and files.

```
/
├── public/ <— !!no files besides favicons and select images here. It's where our rendered pages will be served!!
├── src/ <— where all front-end styles, components, layouts, scripts, and pages should be
│   └── pages/ <— where all pages and posts are constructed
│       └── index.astro <- home page

└── tailwind.config.js <- Tailwind CSS config file
└── package.json <- Astro dependencies
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |


## Docs for Tailwind, Astro

Astro Docs: (https://docs.astro.build)
Tailwind Docs & References: https://tailwindcss.com/doc
Tailwind Components:  https://tailwindui.com/
