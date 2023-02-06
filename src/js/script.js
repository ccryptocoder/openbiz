window.addEventListener('DOMContentLoaded', () => {
    //reveal animations on scroll
    new WOW().init();

    let siMore = Array.from(document.querySelectorAll('.si-more'));
    let siBtnMore = Array.from(document.querySelectorAll('.si-btn-more'));

    //показать текст при нажатии на кнопку Подробнее
    siBtnMore.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if ( !(siMore[index].classList.contains('si-more_active')) ) {
                siMore[index].classList.add('si-more_active');
                siMore[index].style.height = siMore[index].scrollHeight + 'px'; //присвоить тексту высоту его контента (вместо height: auto, иначе trsansition не будет работать) 
                btn.innerText = 'Скрыть';
            } else if ( siMore[index].classList.contains('si-more_active') ) {
                siMore[index].style.height = '0px';
                siMore[index].classList.remove('si-more_active');
                btn.innerText = 'Подробнее';
            }
        });
    });

    //переключение между вкладками Услуги
    let serviceTabBtns = Array.from(document.querySelectorAll('.service__group-btn'));
    let serviceBtnSlider = document.querySelector('.service__group-slider');
    let serviceTabs = Array.from(document.querySelectorAll('.service__tab'));

    serviceTabBtns.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            serviceBtnSlider.classList.toggle('service__group-slider_active');
            serviceTabs.forEach(tab => {
                if(tab.classList.contains('service__tab_active')) {
                    tab.classList.remove('service__tab_active')
                }
            });
            serviceTabs[index].classList.add('service__tab_active');
        });
    });

    //меню в мобильной версии 
    let hamburger = document.querySelector('.menu__hamburger');
    let menuList = document.querySelector('.menu__list');
    let menuItem = Array.from(document.querySelectorAll('.menu__list-item'));

    hamburger.addEventListener('click', () => {
        menuList.classList.toggle('menu__list_active')
        hamburger.classList.toggle('menu__hamburger_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            menuList.classList.toggle('menu__list_active')
            hamburger.classList.toggle('menu__hamburger_active');
        })
    });

    //fixed menu
    let nav = document.querySelector('.header');

    if (window.innerWidth < 768) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 30 || document.documentElement.scrollTop > 30) {
                nav.style.backgroundColor = 'rgba(242,244,248,1)';
                hamburger.classList.add('menu__hamburger_dark');
            }else {
                nav.style.backgroundColor = 'rgba(0,0,0,0)';
                hamburger.classList.remove('menu__hamburger_dark');
            }
        });
    }

    //service popup
    let sOverlay = document.querySelector('.service__overlay');
    let siBtns = Array.from(document.querySelectorAll('.si-btn'));

    siBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            sOverlay.classList.add('service__overlay_active');
        });
    });
    //hide form when user clicks overlay
    sOverlay.addEventListener('click', (e) => {
        e.target.classList.remove('service__overlay_active');
    })
});
