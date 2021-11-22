import AbstractBlock from "../AbstractObjects/AbstractBlock.js";
import { BrickState, BLOCK_SIZE, TANK_SIZE } from "../math.js";

export default class Brick extends AbstractBlock{
   constructor(indexX, indexY){
      super(indexX, indexY);

      this.state = BrickState.FULL;

      this.frame = [
         [16 * TANK_SIZE + BLOCK_SIZE * 4, 4 * TANK_SIZE, this.Size, this.Size], //UP
         [16 * TANK_SIZE + BLOCK_SIZE * 2, 4 * TANK_SIZE, this.Size, this.Size], //DOWN
         [16 * TANK_SIZE + BLOCK_SIZE * 3, 4 * TANK_SIZE, this.Size, this.Size], //LEFT
         [16 * TANK_SIZE + BLOCK_SIZE * 1, 4 * TANK_SIZE, this.Size, this.Size], //RIGHT
         [16 * TANK_SIZE + BLOCK_SIZE * 0, 4 * TANK_SIZE, this.Size, this.Size], //FULL
      ]
   }

   get Frame(){
      return this.frame[this.State];
   }

   get State(){
      return this.state;
   }

   set State(state){
      this.state = state;
   }

   keepShot(Level, Shot){

   }
}