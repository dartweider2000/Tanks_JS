import AbstractBlock from "../AbstractObjects/AbstractBlock.js";
import { TANK_SIZE } from "../math.js";

export default class FlagPlace extends AbstractBlock{
   constructor(indexX, indexY){
      super(indexX, indexY);

      this.frame = [17 * TANK_SIZE, 0, this.Size, this.Size];
   }
}