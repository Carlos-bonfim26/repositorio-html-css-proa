let btnshow = document.getElementById('btn-show');
let nav = document.getElementById('nav-responsive');
let btnclose = document.getElementById('btn-close');

btnshow.addEventListener('click', () =>{

nav.style.display = 'block';
btnshow.style.display = 'none';

});

btnclose.addEventListener('click', () =>{
nav.style.display = 'none';
btnshow.style.display ='block'
})