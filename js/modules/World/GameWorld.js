import Player from "../Actors/Player.js";
import { FirstPlayerMoveKeys, SecondPlayerMoveKeys, FirstPlayerShotKey, SecondPlayerShotKey } from "../math.js";
import MiddleTank from "../Tanks/MiddleTank.js";
import LightTank from "../Tanks/LightTank.js";

export default class GameWorld{
   constructor(level, firstPlayer = null, secondPlayer = null){
      this.level = level;

      if(firstPlayer)
         this.firstPlayer = firstPlayer;
      else 
         this.firstPlayer = new Player(new MiddleTank(
            this.Level.SpawnPlaceFirstPlayer.indexX,
            this.Level.SpawnPlaceFirstPlayer.indexY
         ));

      if(secondPlayer)
         this.secondPlayer = secondPlayer;
      else
         this.secondPlayer = new Player(new LightTank(
            this.Level.SpawnPlaceSecondPlayer.indexX,
            this.Level.SpawnPlaceSecondPlayer.indexY
         ));
   }

   update(activeKeys){
      const keys = this.getPlayKeys(activeKeys);

      this.FirstPlayer.update(this, keys.firstPlayer);
      this.SecondPlayer.update(this, keys.secondPlayer);
   }

   biggestThan(first, second){
      return first >= second;
   }

   LevelLimits(newLeft, newTop, newRight, newBottom){
      return this.biggestThan(newLeft, this.Level.Left) && this.biggestThan(this.Level.Right, newRight) &&
         this.biggestThan(newTop, this.Level.Top) && this.biggestThan(this.Level.Bottom, newBottom);
   }

   moreCorrectCoords(object, newLeft, newTop, newRight, newBottom){
      if(this.biggestThan(this.Level.Left, newLeft))
         newLeft = this.level.Left;
      if(this.biggestThan(newRight, this.Level.Right))
         newLeft = this.Level.Right - object.Size;
      if(this.biggestThan(this.Level.Top, newTop))
         newTop = this.Level.Top;
      if(this.biggestThan(newBottom, this.Level.Bottom))
         newTop = this.Level.Bottom - object.Size;

      return [newLeft, newTop];
   }

   canMove(object, newLeft, newTop, newRight, newBottom){
      if(!this.LevelLimits(newLeft, newTop, newRight, newBottom))
         [newLeft, newTop] = this.moreCorrectCoords(object, newLeft, newTop, newRight, newBottom);
      
      else{

      }

      return [newLeft, newTop];
   }

   getPlayKeys(activeKeys){
      const keys =  Array.from(activeKeys).reduce((keys, key) => {
         if(FirstPlayerMoveKeys.includes(key))
            keys.firstPlayer.moveKey = key;
         else if(SecondPlayerMoveKeys.includes(key))
            keys.secondPlayer.moveKey = key;
         else if(FirstPlayerShotKey == key)
            keys.firstPlayer.shotKey = true;
         else if(SecondPlayerShotKey == key)
            keys.secondPlayer.shotKey = true;
         
         return keys;
      }, {"firstPlayer" : {"moveKey" : null, "shotKey" : false},
         "secondPlayer" : {"moveKey" : null, "shotKey" : false}});

      if(keys.firstPlayer.moveKey)
         keys.firstPlayer.moveKey = FirstPlayerMoveKeys.indexOf(keys.firstPlayer.moveKey);

      if(keys.secondPlayer.moveKey)
         keys.secondPlayer.moveKey = SecondPlayerMoveKeys.indexOf(keys.secondPlayer.moveKey);
      
      return keys;
   }

   get FirstPlayer(){
      return this.firstPlayer;
   }

   get SecondPlayer(){
      return this.secondPlayer;
   }

   get Level(){
      return this.level;
   }
}