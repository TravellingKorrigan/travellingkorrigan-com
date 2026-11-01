# travellingkorrigan.com

Source of the [Travelling Korrigan](https://travellingkorrigan.com) website: a static site built with [Eleventy](https://11ty.dev/) and [WebC](https://www.11ty.dev/docs/languages/webc/), in English, French and Spanish.

## Run it locally

You need [Node.js](https://nodejs.org/) 18 or later.

```sh
npm install
npm run dev     # local server with live reload
npm run build   # writes the site to _site/
```

## Publishing

Every push to `main` builds the site and publishes it to GitHub Pages (`.github/workflows/main.yml`).
