# Yifan Li / Design Portfolio 2026

Static portfolio site rebuilt 1:1 from `Portfolio - Yifan Li.pdf` (15 sheets, 1920 × 2500 pt).

- **Sheets** — every PDF page is one `.page` element with the same `1920/2500` aspect ratio; images and captions are positioned at the PDF's own coordinates, expressed as percentages of the sheet.
- **Palette** — `#ebebeb` paper, `#454545` title ink, `#000000` body/caption, `#2a56a5` accent (the blue of the PDF cover's "2026"; on the site it survives only as the link-hover colour).
- **Type** — Courier New for the cover, section dividers and captions' sibling titles; Calibri for body text (Carlito loaded from Google Fonts as the metric-compatible fallback where Calibri is absent). The cover prints no year.
- **Images** — extracted at the PDF's native resolution, no downsampling. Photographics are JPEG q90, UI screenshots stay PNG.
- **Every orientation keeps the sheet** — there is no reflow fallback. Because positions are percentages of the sheet and type is `cqw`, the number of characters per line is scale-invariant, so the PDF's exact line breaks reproduce at any size.
- **Landscape** — the sheet's shape no longer matches the window's, so it is sized by viewport height (`clamp(420px, 96vh × 0.768, 1000px)`) and a whole PDF page sits on screen at once; the leftover width is simply more paper.
- **Portrait** — the window is already sheet-shaped, so the sheet takes the full width and you scroll.
- **Sheet gap** — consecutive sheets are separated by `clamp(80px, 18vh, 240px)` of paper in both orientations, and the document's top edge opens with that same gap so the cover does not sit flush against the window.
- **Outline ticks** — a fixed rail bottom-right: four bare rules for Home / bio / Graphic / Software, click one to jump. The active chapter's rule goes full length. It carries no plate or panel, so it never stamps a grey box over the artwork; the chapter names appear only while the rail is hovered or focused. Because the PDF's captions live in the same corner, the rail lifts up into the sheet's empty right gutter whenever a caption would fall underneath it.
- Click any image to open it full size; `Esc` or a click closes.

No build step, no dependencies: `index.html` + `styles.css` + `main.js` + `assets/img/`.

## Local preview

```
python -m http.server 8000
```

Then open <http://localhost:8000>.

中文说明见 [README.zh.md](README.zh.md)。
