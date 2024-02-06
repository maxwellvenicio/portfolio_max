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

// scroll suave

const menuItens = document.querySelectorAll('#menu a');

menuItens.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event) {
  event.preventDefault();
  const element = event.target;
  const id = element.getAttribute('href')
  const to = document.querySelector(id).offsetTop;


  window.scroll({
    top: to,
    behavior: "smooth",
  });

}