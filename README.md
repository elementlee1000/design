# Yifan Li / Design Portfolio 2026

Static portfolio site rebuilt 1:1 from `Portfolio - Yifan Li.pdf` (15 sheets, 1920 × 2500 pt), plus one sheet added beyond the deck: **Ticket design**, slotted in after Exhibition board.

- **Sheets** — every PDF page is one `.page` element with the same `1920/2500` aspect ratio; images and captions are positioned at the PDF's own coordinates, expressed as percentages of the sheet.
- **Palette** — `#ebebeb` paper, `#454545` title ink, `#000000` body/caption, `#2a56a5` accent (the blue of the PDF cover's "2026"; on the site it survives only as the link-hover colour).
- **Type** — Courier New for the cover, section dividers and captions' sibling titles; Calibri for body text (Carlito loaded from Google Fonts as the metric-compatible fallback where Calibri is absent). The cover prints no year.
- **Images** — the 18 PDF-sourced images are extracted at the PDF's native resolution, no downsampling. Photographics are JPEG q90, UI screenshots stay PNG. `ticket-design.png` comes from `0以往设计作品/精选/门票 - 合并-透明.png`; it is that file cropped to its own alpha bounding box (pixel-identical inside, every pixel outside is fully transparent) at native 2089 × 2194, so the transparent margin does not push the artwork off the sheet's margins. The master file is untouched.
- **One deliberate deviation** — the PDF sets every caption on a page-bottom baseline (92–97%), leaving anywhere from 3.9% (p9 Fashion design) to 54.4% (p13 Pixel editor) of empty paper above it. "Notebook suit" now hugs its image instead, at `top:71.6%` (image bottom 67.7% + the 3.9% used by the tightest page in the deck). The other ten captions stay on the baseline.
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
