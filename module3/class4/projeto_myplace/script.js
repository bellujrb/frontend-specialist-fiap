const menuButton = document.querySelector('.iconlist')
const navMenu = document.querySelector('.nav-menu')

menuButton.addEventListener('click', () =>{
    navMenu.classList.toggle('mobile-menu')
});