const navMenu = document.querySelector('.nav-menu');
document.addEventListener('click', function(e){
    if(e.target.classList.contains('iconlist') || e.target.classList.contains('nav-menu')){
        navMenu.classList.toggle('mobile-menu');
    } else {
        navMenu.classList.toggle('mobile-menu');
    }

});