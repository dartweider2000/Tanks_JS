import Brick from "./Brick.js";
import Grass from "./Grass.js";
import Road from "./Road.js";
import Iron from "./Iron.js";
import FlagPlace from "./FlagPlace.js";
import Water from "./Water.js";

export default class BlocksFactory{
   static createBlock(sign, indexX, indexY){
      switch(sign){
         case 0:
            return new Road(indexX, indexY);
            break;
         case '#':
            return new Brick(indexX, indexY);
            break;
         case '&':
            return new Iron(indexX, indexY);
            break;
         case 'f':
            return new FlagPlace(indexX, indexY);
            break;
         case '@':
            return new Grass(indexX, indexY);
            break;
         case '~':
            return new Water(indexX, indexY);
            break;
         default:
            throw new Error("Добавь новые строчки кода");
            break;
      }
   }
}