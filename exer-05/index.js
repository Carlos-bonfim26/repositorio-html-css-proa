let icon = document.getElementById('click-button');
let black =document.getElementById('black');

icon.addEventListener('click', () => {
if(icon.classList.contains('fa-moon')){
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    
    black.style.backgroundColor = 'black';
    black.style.color = 'white';
    
}
else if(icon.classList.contains('fa-sun')){
icon.classList.add('fa-moon');
icon.classList.remove('fa-sun');

black.style.backgroundColor = 'white';
black.style.color = 'black';

}});



