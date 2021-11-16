import AbstractTank from "../AbstractObjects/AbstractButtleObjects/AbstractTank.js";
import { TANK_SIZE, AnimationFrame } from "../math.js";

export default class MiddleTank extends AbstractTank{
   constructor(indexX, indexY){
      super(indexX, indexY);

      this.speed = 1;

      this.frame = [
         [0 * this.Size, 0, this.Size, this.Size], //UP
         [4 * this.Size, 0, this.Size, this.Size], //DOWN
         [2 * this.Size, 0, this.Size, this.Size], //LEFT
         [6 * this.Size, 0, this.Size, this.Size], //RIGHT
         [0 * this.Size + this.Size, 0, this.Size, this.Size], //UP AnimationFrame
         [4 * this.Size + this.Size, 0, this.Size, this.Size], //DOWN AnimationFrame
         [2 * this.Size + this.Size, 0, this.Size, this.Size], //LEFT AnimationFrame
         [6 * this.Size + this.Size, 0, this.Size, this.Size], //RIGHT AnimationFrame
      ]
   }
}