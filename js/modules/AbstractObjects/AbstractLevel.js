import { BLOCK_SIZE, BrickState } from "../math.js";
import BlocksFactory from "../Blocks/BlocksFactory.js";
import Brick from "../Blocks/Brick.js";
import Grass from "../Blocks/Grass.js";
import Road from "../Blocks/Road.js";
import Iron from "../Blocks/Iron.js";
import FlagPlace from "../Blocks/FlagPlace.js";
import Water from "../Blocks/Water.js";

export default class AbstractLevel{
   constructor(){
      this.x         = 0;
      this.y         = 0;
      this.width     = 26;
      this.height    = 26;

      this.brick     = [];
      this.road      = [];
      this.grass     = [];
      this.water     = [];
      this.flagPlace = [];
      this.iron      = [];

      this.fakeMap   = [];

      this.spawnPlaceFirstPlayer    = {"indexX" : 8, "indexY" : 24};
      this.spawnPlaceSecondPlayer   = {"indexX" : 16, "indexY" : 24};
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

   update(){
      this.Brick = this.Brick.reduce((result, brick) => {
         if(brick.State == BrickState.DEATH){
            this.addToRoad(new Road(brick.X, brick.Y));

            return result;
         }

         result.push(brick);

         return result;
      }, []);
   }

   render(CX, Sprite){
      [  ...this.Road, 
         ...this.FlagPlace, 
         ...this.Water, 
         ...this.Iron, 
         ...this.Brick, 
         ...this.Grass
      ]
         .forEach(block => block.render(CX, Sprite));
   }

   addToRoad(block){
      this.Road.push(block);
   }

   addToFlagPlace(block){
      this.FlagPlace.push(block);
   }

   addToWater(block){
      this.Water.push(block);
   }

   addToIron(block){
      this.Iron.push(block);
   }

   addToBrick(block){
      this.Brick.push(block);
   }

   addToGrass(block){
      this.Grass.push(block);
   }

   BlockTo(block){
      if(block instanceof Road)
         this.addToRoad(block);
      else if(block instanceof FlagPlace)
         this.addToFlagPlace(block);
      else if(block instanceof Water)
         this.addToWater(block);
      else if(block instanceof Iron)
         this.addToIron(block);
      else if(block instanceof Brick)
         this.addToBrick(block);
      else if(block instanceof Grass)
         this.addToGrass(block);
   }

   makeMap(){
      this.fakeMap.forEach((line, indexY) => line.forEach((sign, indexX) => {
         this.BlockTo(BlocksFactory.createBlock(sign, indexX, indexY));
      }));
   }

   set Brick(brick){
      this.brick = brick;
   }

   get Brick(){
      return this.brick;
   }

   get Iron(){
      return this.iron;
   }

   get Water(){
      return this.water;
   }

   get Road(){
      return this.road;
   }

   get FlagPlace(){
      return this.flagPlace;
   }

   get Grass(){
      return this.grass;
   }

   get Map(){
      return [ 
         ...this.Road, 
         ...this.FlagPlace, 
         ...this.Water, 
         ...this.Iron, 
         ...this.Brick, 
         ...this.Grass
      ];
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