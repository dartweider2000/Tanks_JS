import AbstractButtleObject from "./AbstractButtleObject.js";
import { SHOT_SIZE } from "../../math.js";

export default class AbstractShot extends AbstractButtleObject{
   constructor(x, y, vector){
      super(null, null, vector);

      this.x = x;
      this.y = y;

      this.size = SHOT_SIZE;
   }

   update(gameView){

   }

   move(){

   }
}