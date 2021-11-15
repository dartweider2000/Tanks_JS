import AbstractBlock from "../AbstractObjects/AbstractBlock.js";
import { TANK_SIZE } from "../math.js";

export default class Water extends AbstractBlock{
   constructor(indexX, indexY){
      super(indexX, indexY);

      this.frame = [17 * TANK_SIZE, 5 * TANK_SIZE, this.Size, this.Size];
   }
}