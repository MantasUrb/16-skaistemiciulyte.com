function fixedBodyPosition (selector) {
    
    let mobileNav = document.querySelector('.mobile-nav');
    let body = document.querySelector('.body');

    if (mobileNav.classList.contains('mobile-nav-active')) {
        body.classList.add('fixed-position');
    } else {
        body.classList.remove('fixed-position');
    }
}

export { fixedBodyPosition };


// document.getElementById("body").classList.add("fixed-position");

// function showMobileMenu(selector) {
//     const menuBtn = document.querySelector(".menu-btn");
//     const nav = document.querySelector(".mobile-nav");
  
//     menuBtn.addEventListener("click", () => {
//       nav.classList.toggle("mobile-nav-active");
//     });
//   }