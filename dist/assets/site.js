const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); menu.classList.toggle('open', open); });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { toggle.setAttribute('aria-expanded', 'false'); menu.classList.remove('open'); }));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.classList.contains('open')) { toggle.setAttribute('aria-expanded', 'false'); menu.classList.remove('open'); toggle.focus(); } });
}
