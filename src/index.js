import './assets/scss/main.scss';
import $ from 'jquery';
import RevealOnScroll from './scripts/modules/RevealOnScroll';
import StickyHeader from './scripts/modules/StickyHeader';
import MobileMenu from './scripts/modules/MobileMenu';

//import './work.html';
var mobileMenu = new MobileMenu();
new RevealOnScroll( $('.process'), "45%");
new RevealOnScroll( $('.home_large-img'), "40%");
var stickyHeader = new StickyHeader();