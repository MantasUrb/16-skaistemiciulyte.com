// COMPONENTS AND DATA IMPORT

/* BODY START */
/* BODY END */

/* HEADER START */
import { menuBurger } from './components/burger.js';
import { showMobileMenu } from './components/burger.js';
/* HEADER END */

/* HERO START */
import { heroImages } from './components/hero.js';
import { heroData } from './data/heroData.js';
/* HERO END */

/* FOOTER START */
import { socials } from './components/socials.js';
import { socialsData } from './data/socialsData.js';
/* FOOTER END */

// COMPONENTS EXECUTION

/* BODY START */
/* BODY END */

/* HEADER START */
menuBurger ();
showMobileMenu ();
/* HEADER END */

/* HERO START */
heroImages('.hero-row', heroData);
/* HERO END */

/* FOOTER START */
socials ('.socials', socialsData);
socials ('.about-socials', socialsData);
/* FOOTER END */