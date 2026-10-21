# Yifan Li / Design Portfolio 2026

Static portfolio site rebuilt 1:1 from `Portfolio - Yifan Li.pdf` (15 sheets, 1920 × 2500 pt).

- **Sheets** — every PDF page is one `.page` element with the same `1920/2500` aspect ratio; images and captions are positioned at the PDF's own coordinates, expressed as percentages of the sheet.
- **Palette** — `#ebebeb` paper, `#454545` title ink, `#000000` body/caption, `#2a56a5` accent (the cover's "2026").
- **Type** — Courier New for the cover, section dividers and captions' sibling titles; Calibri for body text (Carlito loaded from Google Fonts as the metric-compatible fallback where Calibri is absent).
- **Images** — extracted at the PDF's native resolution, no downsampling. Photographics are JPEG q90, UI screenshots stay PNG.
- **Landscape** — in a landscape window the sheet is sized by viewport height (`96vh × 0.768`, still capped at 1000 px), so a whole PDF page sits on screen at once and every coordinate and font scales down with it.
- **Portrait / short windows** — below 760 px wide *or* 600 px tall the sheets switch from absolute positioning to a single flowing column, capped at `min(560px, 105vh)`, keeping the same type scale and colours.
- Click any image to open it full size; `Esc` or a click closes.

No build step, no dependencies: `index.html` + `styles.css` + `main.js` + `assets/img/`.

## Local preview

```
python -m http.server 8000
```

Then open <http://localhost:8000>.

中文说明见 [README.zh.md](README.zh.md)。
