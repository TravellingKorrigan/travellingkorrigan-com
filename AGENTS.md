# AGENTS.md

Guidance for AI coding agents (Claude Code reads it through the `CLAUDE.md` symlink). Edit this file, never replace the symlink.

## What this is

The website of **Travelling Korrigan**, an independent label publishing small games built on web standards (browser, plus app stores through Capacitor). Run by Horacio Gonzalez. Promise: **Free to play. Offline. No ads.**

Built with Eleventy 3 + WebC, on the model of `LostInBrittany/korrigan-press`. Deployed to GitHub Pages at https://travellingkorrigan.com by `.github/workflows/main.yml` on every push to `main`. Merging to `main` means going live.

## Commands

```sh
npm install
npm run dev     # eleventy --serve
npm run build   # writes _site/
```

No tests, linter or formatter. Verifying a change means running `npm run build` and checking the HTML in `_site/` for all three locales (`/`, `/fr/`, `/es/`).

## Structure

| Path | Role |
|---|---|
| `content/` | Eleventy input. One folder per locale: `en/`, `fr/`, `es/` |
| `_includes/layouts/` | `home.webc`, `page.webc` (about, privacy), `games.webc` (games list), `game.webc` (one game) |
| `_components/` | Global WebC components: `head-commons`, `site-header`, `site-footer`, `theme-switcher`, `game-card` |
| `_data/global.json` | Site title, URL, default social image, analytics settings |
| `_data/links.json` | Navigation labels and URLs per locale |
| `_data/strings.json` | Interface text per locale (tagline, headings, status labels, footer) |
| `css/` | `main.css` and `themes.css`, inlined into each page by the WebC bundler (linked from `head-commons.webc`) |
| `img/` | Served images. `img/games/<slug>/` holds each game's icon, social card and screenshots |

## Conventions

- **`locale` is mandatory** on every page. The `games` collection mixes all locales: filter on `data.locale` wherever it is used.
- **`translationKey`** links the three versions of a page (the language switcher uses it). Same key in all three files, unique across the site.
- Permalinks are written by hand and localized (`/games/…`, `/fr/jeux/…`, `/es/juegos/…`).
- **Adding a game**: one Markdown file per locale under `content/en/games/`, `content/fr/jeux/`, `content/es/juegos/`, with `tags: ['games']`, `order`, `status` (`in-development`, `beta` or `available`, labels in `strings.json`), `brief`, `card_image`, `image` (social card, JPEG or PNG), optional `play_url` (with `play_note` shown under the button), `google_play`, `app_store`, `release_note`, and `screenshots` (`src`, `alt`, optional `wide`).
- New content lands in all three languages.
- `head-commons.webc` comes from the shared Korrigan Press / lostinbrittany head. Keep its setup and meta blocks in sync; page-specific values must arrive as props from each layout, and `global.*` must be read through helpers, not inline bindings.
- Markdown goes through Liquid: `{{ }}` and `{% %}` are interpreted. The privacy pages use this to mention analytics only when `analyticsWebsiteId` is set.

## Privacy

The site loads Google Fonts. Analytics (self-hosted Umami at `analyticsSrc`) only render when `_data/global.json` sets `analyticsWebsiteId`. If you change what the site loads or collects, update the three privacy pages in the same change. The games themselves collect nothing and must never be described otherwise.

## Writing style (the author's rules)

- No em dashes, no en dashes. Use commas, colons, full stops or parentheses.
- No emojis.
- Short, direct sentences, never salesy. No "dive into", "embark", "seamless", "elevate", "whether you're... or...", rhetorical questions as openers, or exclamation marks for enthusiasm.
- English uses British spelling.
- Never list game ideas that are not announced.
