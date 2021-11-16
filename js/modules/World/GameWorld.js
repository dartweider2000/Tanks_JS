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

   canMove(object, newLeft, newTop){
      return true;
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