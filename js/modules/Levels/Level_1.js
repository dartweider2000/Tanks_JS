import AbstractLevel from "../AbstractObjects/AbstractLevel.js";
import map from "./Maps/Map_1.js";

export default class Level_1 extends AbstractLevel{
   constructor(){
      super();

      this.fakeMap = map;
      this.spawnPlaceFirstPlayer = {"indexX" : null, "indexY" : null};
      this.spawnPlaceSecondPlayer = {"indexX" : null, "indexY" : null};
      this.spawnPlaceEnemies = [
         {"indexX" : null, "indexY" : null},
         {"indexX" : null, "indexY" : null}
      ];
      this.baseCoord = [
         {"indexX" : null, "indexY" : null},
         {"indexX" : null, "indexY" : null},
         {"indexX" : null, "indexY" : null},
         {"indexX" : null, "indexY" : null}
      ];
   }

   makeMap(){

   }
}