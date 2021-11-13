//use strict

import Game from "./modules/Game.js";

const
   under = document.querySelector('.under_canvas'),
   canv = document.querySelector('.canvas');

canv.height = under.offsetHeight;
canv.width = under.offsetWidth;

const game = new Game(canv);

await game.start();