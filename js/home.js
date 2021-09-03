// COMPONENTS AND DATA IMPORT

/* HEADER START */
import { menuBurger } from './components/burger.js';
import { showMobileMenu } from './components/burger.js';

/* HEADER END */

/* HERO START */
/* HERO END */

/* FOOTER START */
import { socials } from './components/socials.js';
import { socialsData } from './data/socialsData.js';
/* FOOTER END */

// COMPONENTS EXECUTION

/* HEADER START */
menuBurger ();
showMobileMenu ();

/* HEADER END */

/* HERO START */
/* HERO END */

/* FOOTER START */
socials ('.socials', socialsData);
/* FOOTER END */