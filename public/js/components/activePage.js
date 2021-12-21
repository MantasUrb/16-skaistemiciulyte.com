function activePage (selector) {

    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');

        if (currentPage == '/') {navLinks[0].classList.add('active')}
        if (currentPage == '/about') {navLinks[1].classList.add('active')}
    }

export { activePage };
