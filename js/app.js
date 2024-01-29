const btnMobile = document.getElementById('btn-mobile');
const linkMenu = document.querySelector('#menu a');

function toggleMenu(evevt) {
  
  if (evevt.type === 'touchstart') event.preventDefault();
  const nav = document.querySelector('#nav');
  nav.classList.toggle('active');

  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);

  if (active) {
  event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
  event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

linkMenu.addEventListener('click', toggleMenu);
linkMenu.addEventListener('touchstart', toggleMenu);

