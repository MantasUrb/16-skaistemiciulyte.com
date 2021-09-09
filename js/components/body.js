function fixedBodyPosition (selector) {
    
    let mobileNav = document.querySelector('#mobile-nav');
    let body = document.querySelector('#body', '#about-body');

    if (mobileNav.classList.contains('mobile-nav-active')) {
        body.classList.remove('fixed-position');
    } else {
        body.classList.add('fixed-position');
    }
}

export { fixedBodyPosition };