import HeavyTank from "../Base/HeavyTank.js";

export default class SecondPlayerHeavyTank extends HeavyTank{
   constructor(indexX, indexY, vector){
      super(indexX, indexY, vector);

      this.frame = [
         [0 * this.Size, 11 * this.Size, this.Size, this.Size], //UP
         [4 * this.Size, 11 * this.Size, this.Size, this.Size], //DOWN
         [2 * this.Size, 11 * this.Size, this.Size, this.Size], //LEFT
         [6 * this.Size, 11 * this.Size, this.Size, this.Size], //RIGHT
         [0 * this.Size + this.Size, 11 * this.Size, this.Size, this.Size], //UP Animationframe
         [4 * this.Size + this.Size, 11 * this.Size, this.Size, this.Size], //DOWN Animationframe
         [2 * this.Size + this.Size, 11 * this.Size, this.Size, this.Size], //LEFT Animationframe
         [6 * this.Size + this.Size, 11 * this.Size, this.Size, this.Size], //RIGHT Animationframe
      ];
   }
}