<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, minimum-scale=1.0"/>
    <title>About | Skaiste Miciulyte</title>
    <!-- <link rel="stylesheet" href="./css/home.css" /> -->
    <link href="{{ asset('css/home.css') }}" rel="stylesheet" />
  </head>

  <body id="about-body">
    <!-- HEADER START -->
    <div class="about-header">
      <div class="header-logo"><a href="./">skaiste miciulyte</a></div>
      <nav class="header-nav">
        <ul class="hidden-sm hidden-md">
          <li><a href="./">Work</a></li>
          <li><a href="./about">About</a></li>
          <li><a href="https://www.instagram.com/skaiste.miciulyte/" target="_blank">Instagram</a></li>
        </ul>
        <div class="menu-btn about-menu-btn">
          <div class="menu-btn__burger"></div>
        </div>
      </nav>
    </div>
    <div id="mobile-nav" class="container-fluid mobile-nav">
      <ul>
        <li><a href="./">Work</a></li>
        <div class="whiteline"></div>
        <li><a href="./about">About</a></li>
        <div class="whiteline"></div>
        <li><a href="https://www.instagram.com/skaiste.miciulyte/" target="_blank">Instagram</a></li>
      </ul>
    </div>
    <!-- HEADER END -->

    <!-- HERO START -->
    <div class="container">
      <div class="row about-hero">
        <div class="first-section col-8 col-xl-8 col-md-12">
          <p>Hi! I'm an illustrator based near Vilnius, Lithuania.</p>
          <p>
            Having finished International Politics and Development studies I
            couldn't resist my passion for arts. So I started working as a
            graphic designer and took a focus on illustration in recent years.
            Since then I work on editorial and advertising projects.​
          </p>
          <p>
            <span class="first-word">Clients:</span> Agency 1323, European
            Movement Lithuania, Bosanova, Era Esthetics, PassCamp, Raktas
            magazine, PR Service, Tiki Inn and more.
          </p>
        </div>
        <div class="second-section col-4 col-xl-4 col-md-12">
          <div>
            <p>Let's talk:</p>
            <p>
              <a href="mailto:skaiste.miciulyte@gmail.com" class="about-email">skaiste.miciulyte@gmail.com</a>
            </p>
            <br />
            <p>Stay in touch:</p>
            <div class="about-socials"></div>
          </div>
        </div>
        <div class="third-section col-12 col-xl-8 col-md-12">
          <img
            src="./img/about/profile.webp"
            alt="Profile picture while working with dog"
          />
          <p class="photoby">
            Picture taken by <a href="#">@lightelementlab</a>
          </p>
        </div>
      </div>
    </div>
    <!-- HERO END -->

    <!-- FOOTER START -->
    <div class="footer-container about-footer-container">
      <div class="footer">
        <div class="socials"></div>
        <div class="email">
          <a href="mailto:skaiste.miciulyte@gmail.com">skaiste.miciulyte@gmail.com</a>
        </div>
      </div>
    </div>
    <!-- FOOTER END -->
    <script src="./js/home2social.js" type="module" defer></script>
  </body>
</html>
