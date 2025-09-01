# NZHC Product Page — Professional Refactor

- Consistent, component-scoped class names using **Block__Element--Modifier** style.
- Design tokens in `src/styles/tokens.css` (colors, spacing, radius, shadows).
- Clear component names: `SiteHeader`, `ProductGallery`, `ProductDetails`, and focused leaf-components.
- Accessible behaviors: Esc to close modal/drawer; focus moves to close button; icons have labels; keyboard on carousel.
- Responsive breakpoints at 980px (grid) and 960px (header).

Run:
```bash
npm install
npm run dev
```

Folder layout follows **one component per folder** with `index.jsx` and `index.css`.
