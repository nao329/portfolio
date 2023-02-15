const menu = document.querySelector('#js-info');
const nav = document.querySelector('#js-nav');

menu.addEventListener('click', function () {

  menu.classList.toggle('active');
  nav.classList.toggle('active');

});