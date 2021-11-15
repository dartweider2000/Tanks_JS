import Level_1 from "./Level_1.js";

export default class Levels{
   constructor(){
      this.levels = [
         new Level_1()
      ];

      this.init();
   }

   init(){
      this.Levels.forEach((level, index) => level.Number = ++index);
   }

   get Levels(){
      return this.levels;
   }

   getLevel(number){
      return this.Levels[number - 1];
   }
}