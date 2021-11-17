function staticFooter (selector) {

    const body = document.querySelector('body');

    if (window.innerWidth >= 750) {
        body.classList.add('footer-margin');
    }
}

export { staticFooter };