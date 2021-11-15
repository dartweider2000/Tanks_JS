import AbstractLevel from "../AbstractObjects/AbstractLevel.js";
import map from "./Maps/Map_1.js";

export default class Level_1 extends AbstractLevel{
   constructor(){
      super();

      this.fakeMap = map;

      this.makeMap();
   }
}