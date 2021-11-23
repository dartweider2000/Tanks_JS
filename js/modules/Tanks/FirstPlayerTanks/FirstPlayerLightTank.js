import LightTank from "../Base/LightTank.js";

export default class FirstPlayerLightTank extends LightTank{
   constructor(indexX, indexY, vector){
      super(indexX, indexY, vector);

      this.frame = [
         [0 * this.Size, 5 * this.Size, this.Size, this.Size], //UP
         [4 * this.Size, 5 * this.Size, this.Size, this.Size], //DOWN
         [2 * this.Size, 5 * this.Size, this.Size, this.Size], //LEFT
         [6 * this.Size, 5 * this.Size, this.Size, this.Size], //RIGHT
         [0 * this.Size + this.Size, 5 * this.Size, this.Size, this.Size], //UP AnimationFrame
         [4 * this.Size + this.Size, 5 * this.Size, this.Size, this.Size], //DOWN AnimationFrame
         [2 * this.Size + this.Size, 5 * this.Size, this.Size, this.Size], //LEFT AnimationFrame
         [6 * this.Size + this.Size, 5 * this.Size, this.Size, this.Size], //RIGHT AnimationFrame
      ];
   }
}