import SlideNav from './slide.js';
import ScrollSuave from './scroll-suave.js';

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addControl('.custom-controls');

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();
