const box = document.getElementById('lightbox');
const boxImg = box.querySelector('img');

function open(src, alt) {
  boxImg.src = src;
  boxImg.alt = alt;
  box.hidden = false;
  document.body.style.overflow = 'hidden';
}

function close() {
  box.hidden = true;
  boxImg.removeAttribute('src');
  document.body.style.overflow = '';
}

document.querySelectorAll('.ph').forEach(img => {
  img.addEventListener('click', () => open(img.currentSrc || img.src, img.alt));
});

box.addEventListener('click', close);
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !box.hidden) close(); });

/* Outline ticks — a chapter runs from its own sheet until the next one starts. */
const toc = document.querySelector('.toc');
const chapters = [...toc.querySelectorAll('a')].map(a => ({
  link: a,
  sheet: document.querySelector(a.hash)
}));
const captions = [...document.querySelectorAll('.cap')];

function trackChapter() {
  const line = scrollY + innerHeight * 0.35;
  let current = chapters[0];
  for (const c of chapters) if (c.sheet.getBoundingClientRect().top + scrollY <= line) current = c;
  chapters.forEach(c => c.link.classList.toggle('on', c === current));
}

/* Captions sit in each sheet's bottom-right corner — exactly where the outline
   lives. Lift the outline into the sheet's empty right gutter while a caption
   would otherwise be hidden under it. */
function yieldToCaptions() {
  const css = getComputedStyle(toc);
  const right = innerWidth - parseFloat(css.right);
  const bottom = innerHeight - parseFloat(css.bottom);
  const slot = { left: right - toc.offsetWidth, right, top: bottom - toc.offsetHeight, bottom };

  let lift = 0;
  for (const c of captions) {
    const r = c.getBoundingClientRect();
    if (r.bottom < 0 || r.top > innerHeight) continue;
    const overlaps = r.right > slot.left - 8 && r.left < slot.right
                  && r.bottom > slot.top - 8 && r.top < slot.bottom;
    if (overlaps) lift = Math.max(lift, slot.bottom - r.top + 10);
  }
  toc.style.transform = lift ? `translateY(${-lift}px)` : '';
}

/* Hovering widens the rail to show the chapter names, so it needs re-checking. */
for (const ev of ['mouseenter', 'mouseleave', 'focusin', 'focusout'])
  toc.addEventListener(ev, yieldToCaptions);

let queued = false;
function onScroll() {
  if (queued) return;
  queued = true;
  requestAnimationFrame(() => { queued = false; trackChapter(); yieldToCaptions(); });
}
addEventListener('scroll', onScroll, { passive: true });
addEventListener('resize', onScroll);
trackChapter();
yieldToCaptions();
