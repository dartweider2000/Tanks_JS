import AbstractTank from "../AbstractObjects/AbstractButtleObjects/AbstractTank.js";
import { TANK_SIZE, AnimationFrame } from "../math.js";
import LightTankShot from "../Shots/LightTankShot.js";

export default class LightTank extends AbstractTank{
   constructor(indexX, indexY){
      super(indexX, indexY);

      this.speed = 2;
      this.coolDown = 500;

      this.frame = [
         [0 * this.Size, 13 * this.Size, this.Size, this.Size], //UP
         [4 * this.Size, 13 * this.Size, this.Size, this.Size], //DOWN
         [2 * this.Size, 13 * this.Size, this.Size, this.Size], //LEFT
         [6 * this.Size, 13 * this.Size, this.Size, this.Size], //RIGHT
         [0 * this.Size + this.Size, 13 * this.Size, this.Size, this.Size], //UP Animationframe
         [4 * this.Size + this.Size, 13 * this.Size, this.Size, this.Size], //DOWN Animationframe
         [2 * this.Size + this.Size, 13 * this.Size, this.Size, this.Size], //LEFT Animationframe
         [6 * this.Size + this.Size, 13 * this.Size, this.Size, this.Size], //RIGHT Animationframe
      ]
   }

   shot(World){
      World.addShot(new LightTankShot(...this.getShotCoords(), this.Vector, this));
   }
}