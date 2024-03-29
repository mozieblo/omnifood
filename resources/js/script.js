/* STICKY NAVIGATION */

window.onscroll = () => {
    stickyNav();
    animatedEffect();
};

function stickyNav() {
    const navbar = document.querySelector('nav');
    const sticky = document.querySelector('.section-features').offsetHeight;

    if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky')
    } else {
    navbar.classList.remove('sticky');
    }
}

/* SCROLL ON BUTTONS */

const DOMstrings = {
    jsButtonHungry: '.js--scroll-to-plans',
    jsButtonShowMore: '.js--scroll-to-features',
    sectionPlans: '.js--section-plans',
    sectionFeatures: '.js--section-features',
    };

const scroll1 = document.querySelector(DOMstrings.sectionPlans);
const scroll2 = document.querySelector(DOMstrings.sectionFeatures);

document.querySelector(DOMstrings.jsButtonHungry).onclick = () => {
    scrollButton(scroll1);
};

document.querySelector(DOMstrings.jsButtonShowMore).onclick = () => {
    scrollButton(scroll2);
};

function scrollButton(element) {
    window.scrollTo({
    'behavior': 'smooth',    
    'left': 0,
    'top': element.offsetTop
  });
}

/* NAVIGATION SCROLL */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/* ANIMATION ON SCROLL */

function animatedEffect() {
    const jsWp1 = document.querySelector('.js--wp-1');
    const animate = document.querySelector('.section-features').offsetTop;
    const jsWp2 = document.querySelector('.js--wp-2');
    const animate2 = document.querySelector('.js--section-cities').offsetTop;
    const jsWp3 = document.querySelector('.js--wp-3');
    const animate3 = document.querySelector('.js--section-steps').offsetTop;
    const jsWp4 = document.querySelector('.js--wp-4');
    const animate4 = document.querySelector('.js--section-plans').offsetTop;
    
    if (window.pageYOffset >= animate) {
        jsWp1.classList.add('animated');
        jsWp1.classList.add('fadeIn');
    }
     
    if (window.pageYOffset >= animate2) {
        jsWp2.classList.add('animated');
        jsWp2.classList.add('fadeIn');
    }
    
    if (window.pageYOffset >= animate3) {
        jsWp3.classList.add('animated');
        jsWp3.classList.add('fadeInUp');
    }
    
    if (window.pageYOffset >= animate4) {
        jsWp4.classList.add('animated');
        jsWp4.classList.add('pulse');
    }
}

/* MOBILE NAVIGATION */

document.getElementById('js--main-nav').classList.add('animated');

(function setParametrsStart () {
    if (window.innerWidth <= 767) {
        document.getElementById('js--main-nav').classList.add('hide');
        document.getElementById('js--main-nav').classList.add('slideOutUp');
    } else {
        document.getElementById('js--main-nav').classList.remove('hide');
        document.getElementById('js--main-nav').classList.remove('slideOutUp');
        document.getElementById('js--main-nav').classList.remove('slideInDown')
    }
})();
window.onresize = () => {
    setParametrs();
};

function setParametrs () {
    if (window.innerWidth <= 767) {
        document.getElementById('js--main-nav').classList.add('hide');
        document.getElementById('js--main-nav').classList.add('slideOutUp');
        document.getElementById('js--nav-icona').classList.remove('ion-md-close'); 
        document.getElementById('js--nav-icona').classList.add('ion-md-menu');  
    } else {
        document.getElementById('js--main-nav').classList.remove('hide');
        document.getElementById('js--main-nav').classList.remove('slideOutUp');
        document.getElementById('js--main-nav').classList.remove('slideInDown')
    }
};


document.getElementById('js--nav-icon').onclick = () => {
    mobileNav();
};

function mobileNav() {
    const nav = document.getElementById('js--main-nav');
    const icon = document.getElementById('js--nav-icona');
  
    nav.classList.toggle('slideOutUp');
    nav.classList.toggle('slideInDown');
    nav.classList.remove('hide');
    
    if (nav.classList.contains('slideInDown')) {
        icon.classList.remove('ion-md-menu');
        icon.classList.add('ion-md-close');     
    } else {
        icon.classList.remove('ion-md-close');
        icon.classList.add('ion-md-menu');
    }
}  