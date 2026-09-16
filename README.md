# Reel — Movie Explorer

A responsive React app for browsing and searching TV shows, built on the free
[TVMaze API](https://www.tvmaze.com/api).

## Features

- **Home page** — hero banner with a call-to-action into the listing page.
- **Listing page** — live search (`/search/shows?q=`) that falls back to the
  full catalogue (`/shows`) when the search box is empty.
- **Movie cards** — poster, title, rating, release year, and a "See details" button.
- **Details modal** — backdrop image, overview, genres, network, runtime, and
  status, closable via the ✕ button or by clicking outside the card.
- Fully responsive: single column on mobile, multi-column grid on desktop.

## Stack

- React 18 + Vite
- React Router
- Plain CSS (no framework) — design tokens in `src/index.css`

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

## Build for production

```bash
npm run build
npm run preview
```

The production build lands in `dist/`, ready to deploy to Vercel, Netlify, or
GitHub Pages.

## Project structure

```
src/
  components/   Navbar, Footer, SearchBar, MovieCard, MovieModal, SprocketStrip
  pages/        Home, Listing
  App.jsx       routes
  main.jsx      entry point
  index.css     design tokens & global styles
```
