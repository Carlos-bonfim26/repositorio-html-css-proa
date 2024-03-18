 let yes = document.getElementById('yes');
let no = document.getElementById('no');
let botao = document.getElementById('butClick');
let back = document.getElementById('background');
let alertBox = document.getElementById('alert-box');
let contBotao = document.getElementById('container-button');

botao.addEventListener('click', () => {
back.style.opacity = '1';
alertBox.style.opacity = '1';
alertBox.style.pointerEvents = 'all';
contBotao.style.opacity = '0';

});

yes.addEventListener('click', () => {
    alertBox.style.opacity = '0';
    alertBox.style.pointerEvents = 'none';
    back.style.opacity = '0';
    contBotao.style.opacity = '1';

});

no.addEventListener('click', () => {
    alertBox.style.opacity = '0';
    alertBox.style.pointerEvents = 'none';
    back.style.opacity = '0';
    contBotao.style.opacity = '1';
});

