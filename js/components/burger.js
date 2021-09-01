function menuBurger(selector) {
  const menuBtn = document.querySelector(".menu-btn");
  let menuOpen = false;
  menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
      menuBtn.classList.add("open");
      menuOpen = true;
    } else {
      menuBtn.classList.remove("open");
      menuOpen = false;
    }
  });
}

function showMobileMenu(selector) {
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".mobile-nav");

  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("mobile-nav-active");
  });
}

export { menuBurger };
export { showMobileMenu };
