/* STICKY NAVIGATION */

window.onscroll = () => {
    stickyNav()
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


