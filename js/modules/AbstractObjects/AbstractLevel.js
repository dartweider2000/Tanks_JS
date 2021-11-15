import { BLOCK_SIZE } from "../math.js";
import Brick from "../Blocks/Brick.js";
import Grass from "../Blocks/Grass.js";
import Road from "../Blocks/Road.js";
import Iron from "../Blocks/Iron.js";
import FlagPlace from "../Blocks/FlagPlace.js";
import Water from "../Blocks/Water.js";

export default class AbstractLevel{
   constructor(){
      this.x = 0;
      this.y = 0;
      this.width = 26;
      this.height = 26;

      this.fakeMap = [];
      this.map = [];

      this.spawnPlaceFirstPlayer = {"indexX" : 8, "indexY" : 24};
      this.spawnPlaceSecondPlayer = {"indexX" : 16, "indexY" : 24};
      this.spawnPlaceEnemies = [
         {"indexX" : 0, "indexY" : 0},
         {"indexX" : 12, "indexY" : 0},
         {"indexX" : 24, "indexY" : 0}
      ];
      this.baseCoord = [
         {"indexX" : 12, "indexY" : 24},
         {"indexX" : 12, "indexY" : 25},
         {"indexX" : 13, "indexY" : 24},
         {"indexX" : 13, "indexY" : 25}
      ];
   }

   render(CX, Sprite){
      this.Map.forEach(block => block.render(CX, Sprite));
   }

   addToMap(block){
      this.Map.push(block);
   }

   makeMap(){
      this.fakeMap.forEach((line, indexY) => line.forEach((sign, indexX) => {
         switch(sign){
            case 0:
               this.addToMap(new Road(indexX, indexY));
               break;
            case '#':
               this.addToMap(new Brick(indexX, indexY));
               break;
            case '&':
               this.addToMap(new Iron(indexX, indexY));
               break;
            case 'f':
               this.addToMap(new FlagPlace(indexX, indexY));
               break;
            case '@':
               this.addToMap(new Grass(indexX, indexY));
               break;
            case '~':
               this.addToMap(new Water(indexX, indexY));
               break;
         }
      }));
   }

   get Map(){
      return this.map;
   }

   get Width(){
      return this.width;
   }

   get Height(){
      return this.height;
   }

   get Left(){
      return this.x;
   }

   get Top(){
      return this.y;
   }

   get Right(){
      return this.Left + (this.Width * BLOCK_SIZE);
   }

   get Bottom(){
      return this.Top + (this.Height * BLOCK_SIZE);
   }

   get SpawnPlaceFirstPlayer(){
      return this.spawnPlaceFirstPlayer;
   }

   get SpawnPlaceSecondPlayer(){
      return this.spawnPlaceSecondPlayer;
   }

   get SpawnPlaceEnemies(){
      return this.spawnPlaceEnemies;
   }

   get BaseCoords(){
      return this.baseCoord;
   }

   get Number(){
      return this.number;
   }

   set Number(number){
      this.number = number;
   }
}