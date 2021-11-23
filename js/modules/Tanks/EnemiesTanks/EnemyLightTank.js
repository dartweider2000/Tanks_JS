import LightTank from "../Base/LightTank.js";

export default class EnemyLightTank extends LightTank{
   constructor(indexX, indexY, vector){
      super(indexX, indexY, vector);

      this.frame = [
         [8 * this.Size, 5 * this.Size, this.Size, this.Size], //UP
         [12 * this.Size, 5 * this.Size, this.Size, this.Size], //DOWN
         [10 * this.Size, 5 * this.Size, this.Size, this.Size], //LEFT
         [14 * this.Size, 5 * this.Size, this.Size, this.Size], //RIGHT
         [8 * this.Size + this.Size, 5 * this.Size, this.Size, this.Size], //UP AnimationFrame
         [12 * this.Size + this.Size, 5 * this.Size, this.Size, this.Size], //DOWN AnimationFrame
         [10 * this.Size + this.Size, 5 * this.Size, this.Size, this.Size], //LEFT AnimationFrame
         [14 * this.Size + this.Size, 5 * this.Size, this.Size, this.Size], //RIGHT AnimationFrame
      ];
   }
}