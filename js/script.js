const header = document.querySelector('header'),
    header_btn = document.querySelector('.header_btn'),
    about_us = document.querySelector('.about_us');

window.addEventListener('scroll', () =>{
    header.classList.toggle('scroll_bg', window.scrollY > 100);
});

if (header_btn && about_us){
    header_btn.addEventListener('click', () =>{
        about_us.scrollIntoView({
            behavior: 'smooth'
        });
    });
}

new WOW().init();

$.letItSnow('body', {
    stickyFlakes: 'lis-flake--js',
    makeFlakes: true,
    sticky: true
});