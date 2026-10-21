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
