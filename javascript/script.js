import SlideNavShapes from './slideShapes.js';

const slideShapes = new SlideNavShapes('.slide-shapes', '.slide-wrapper-shapes');
slideShapes.init();
slideShapes.addArrow('.prev-shapes', '.next-shapes');
slideShapes.addControl('.custom-controls-shapes');

import SlideNavRolamento from './slideRolamento.js';

const slideRolamento = new SlideNavRolamento('.slide-rolamento', '.slide-wrapper-rolamento');
slideRolamento.init();
slideRolamento.addArrow('.prev-rolamento', '.next-rolamento');
slideRolamento.addControl('.custom-controls-rolamento');

import initModal from "./modal.js";
initModal();