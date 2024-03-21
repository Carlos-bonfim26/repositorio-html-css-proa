let btnMenu = document.getElementById('btn-menu');
let btnClose = document.getElementById('btn-close');
let menu = document.getElementById('menu');

btnMenu.addEventListener('click', () => {
    btnMenu.style.display = 'none';
    menu.style.display = 'block';
});

btnClose.addEventListener('click', () => {
btnMenu.style.display = 'block';
menu.style.display = 'none';
});