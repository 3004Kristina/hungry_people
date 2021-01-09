jQuery(function() {
    'use strict';

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

    $.letItSnow('.snowfall', {
        stickyFlakes: 'lis-flake--js',
        makeFlakes: true,
        sticky: true
    });

    // MODAL START
    jQuery('.modal').on('closed', function() {
        jQuery('.modal_resume form').trigger('reset');
    });
    // MODAL END

    let $map = document.getElementById('myMapId');
    DG.autoload(function() {
        'use strict';

        let myMap = new DG.Map($map);

        myMap.setCenter(new DG.GeoPoint(37.609218, 55.753559), 11);
        myMap.controls.add(new DG.Controls.Zoom());
    });
});


