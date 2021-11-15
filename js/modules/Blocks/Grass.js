import AbstractBlock from "../AbstractObjects/AbstractBlock.js";
import { TANK_SIZE } from "../math.js";

export default class Grass extends AbstractBlock{
   constructor(indexX, indexY){
      super(indexX, indexY);

      this.frame = [16 * TANK_SIZE + this.Size, 4 * TANK_SIZE + this.Size, this.Size, this.Size];
   }
}