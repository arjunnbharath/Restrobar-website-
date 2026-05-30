# Zayro website

A multi-page marketing site for **Zayro** — a restaurant and bar: home story and visuals, food and drink menu, table booking, and contact. Layout is responsive for desktop and mobile.

## Pages

- **`index.html`** — Landing: hero, gallery, about, signature dishes, coffee highlights, dining imagery, contact block, footer.
- **`menu.html`** — Menu categories with cards and imagery; sticky header.
- **`booktable.html`** — Reservation form.
- **`contactus.html`** — Contact and social links.

## Tech stack

- **Vite** for local dev and production builds  
- **HTML**, **CSS** (`src/style.css`), **JavaScript** (`src/main.js`)  
- Static assets under `public/`

## Getting started

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`). Use **`npm run dev`** from the project root so asset paths resolve correctly.

### Other commands

```bash
npm run build    # output to dist/
npm run preview  # serve the production build locally
```

## Project layout

| Path | Role |
|------|------|
| `index.html`, `menu.html`, `booktable.html`, `contactus.html` | Page entry HTML |
| `src/style.css` | Global styles and components |
| `src/main.js` | Scroll animations, parallax, mobile nav |
| `public/images/` | Logos, hero art, composition images |

## Customizing

- Replace copy and images in the HTML files and `public/images/`.  
- Adjust colors, typography, and breakpoints in `src/style.css`.  
- Update form `action` attributes on booking/contact pages when wiring a backend.

## License

Private project; all rights reserved unless you add your own license.
