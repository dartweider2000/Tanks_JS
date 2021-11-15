import { BLOCK_SIZE } from "../math.js";

export default class AbstractLevel{
   constructor(){
      this.x = 0;
      this.y = 0;
      this.width = 23;
      this.height = 23;
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
}