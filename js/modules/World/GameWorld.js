import Player from "../Actors/Player.js";
import { FirstPlayerMoveKeys, SecondPlayerMoveKeys, FirstPlayerShotKey, SecondPlayerShotKey, Vector, Gor, Ver, BLOCK_SIZE, LeftUp, RightDown, TANK_SIZE } from "../math.js";
import MiddleTank from "../Tanks/MiddleTank.js";
import LightTank from "../Tanks/LightTank.js";
import Shots from "../Shots/Shots.js";
import AbstractTank from "../AbstractObjects/AbstractButtleObjects/AbstractTank.js";

export default class GameWorld{
   constructor(level, firstPlayer = null, secondPlayer = null){
      this.shots = new Shots();
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

      this.Shots.update(this);

      this.FirstPlayer.update(this, keys.firstPlayer);
      this.SecondPlayer.update(this, keys.secondPlayer);

      //this.Shots.update(this);
   }

   addShot(shot){
      this.Shots.add(shot);
   }

   biggestThan(first, second){
      return first >= second;
   }

   biggestThan_2(first, second){
      return first > second;
   }

   pointInside(pointLeft, pointTop, newLeft, newTop, newRight, newBottom){
      return this.biggestThan_2(pointLeft, newLeft) && this.biggestThan_2(newRight, pointLeft) &&
         this.biggestThan_2(pointTop, newTop) && this.biggestThan_2(newBottom, pointTop);
   }

   inside(block, newLeft, newTop, newRight, newBottom){
      return this.pointInside(block.Left, block.Top, newLeft, newTop, newRight, newBottom) || 
         this.pointInside(block.Right, block.Top, newLeft, newTop, newRight, newBottom) ||
         this.pointInside(block.Left, block.Bottom, newLeft, newTop, newRight, newBottom) || 
         this.pointInside(block.Right, block.Bottom, newLeft, newTop, newRight, newBottom);
   }

   LevelLimits(newLeft, newTop, newRight, newBottom){
      return this.biggestThan(newLeft, this.Level.Left) && this.biggestThan(this.Level.Right, newRight) &&
         this.biggestThan(newTop, this.Level.Top) && this.biggestThan(this.Level.Bottom, newBottom);
   }

   moreCorrectCoords(object, block, newLeft, newTop, newRight, newBottom){
      if(this.biggestThan(block.Left, newLeft))
         newLeft = block.Left;
      if(this.biggestThan(newRight, block.Right))
         newLeft = block.Right - object.Size;
      if(this.biggestThan(block.Top, newTop))
         newTop = block.Top;
      if(this.biggestThan(newBottom, block.Bottom))
         newTop = block.Bottom - object.Size;

      return [newLeft, newTop];
   }

   moreCorrectCoordsBlocks(object, block, newLeft, newTop, newRight, newBottom){
      if(this.pointInside(block.Left, block.Top, newLeft, newTop, newRight, newBottom)){
         if(object.Vector == Vector.DOWN)
            newTop = block.Top - object.Size;
         else if(object.Vector == Vector.RIGHT)
            newLeft = block.Left - object.Size;
      }else if(this.pointInside(block.Right, block.Top, newLeft, newTop, newRight, newBottom)){
         if(object.Vector == Vector.DOWN)
            newTop = block.Top - object.Size;
         else if(object.Vector == Vector.LEFT)
            newLeft = block.Right;
      }else if(this.pointInside(block.Left, block.Bottom, newLeft, newTop, newRight, newBottom)){
         if(object.Vector == Vector.UP)
            newTop = block.Bottom;
         else if(object.Vector == Vector.RIGHT)
            newLeft = block.Left - object.Size;
      }else if(this.pointInside(block.Right, block.Bottom, newLeft, newTop, newRight, newBottom)){
         if(object.Vector == Vector.UP)
            newTop = block.Bottom;
         else if(object.Vector == Vector.LEFT)
            newLeft = block.Right;
      }

      return [newLeft, newTop];
   }

   blocksCollision(object, newLeft, newTop, newRight, newBottom){
      return [...this.Level.Brick, ...this.Level.Iron, ...this.Level.Water].reduce((result, block) => {
         if(this.inside(block, newLeft, newTop, newRight, newBottom)){
            result.push(block);
         }

         return result;
      }, []);
   }

   canMoveTank(object, newLeft, newTop, newRight, newBottom){
      if(!this.LevelLimits(newLeft, newTop, newRight, newBottom))
         [newLeft, newTop] = this.moreCorrectCoords(object, this.Level, newLeft, newTop, newRight, newBottom);
      else{
         let blocks = this.blocksCollision(object, newLeft, newTop, newRight, newBottom);

         if(blocks.length)
            [newLeft, newTop] = blocks.reduce((result, block) => {
               result = this.moreCorrectCoordsBlocks(object, block, newLeft, newTop, newRight, newBottom);

               return result;
            }, [newLeft, newTop]);
      }

      return [newLeft, newTop];
   }

   canMoveShot(object, newLeft, newTop, newRight, newBottom){
      if(!this.LevelLimits(newLeft, newTop, newRight, newBottom)){
         [object.Left, object.Top] = this.moreCorrectCoords(object, this.Level, object.Left, object.Top, object.Right, object.Bottom);
         return false;   
      }else{
         let target = this.blocksCollision(object, newLeft, newTop, newRight, newBottom);

         //console.log(target);

         if(target.length > 0){
           // target.forEach(target => {
            //   [object.Left, object.Top] = this.moreCorrectCoords(object, target, object.Left, object.Top, object.Right, object.Bottom);
            //});

            return false;
         }else
            return true;
      }
   }

   lookForlineStart(mainLine, coord){
      for(let i = 0; i < mainLine; i++){
         if(coord - TANK_SIZE / 4 < i * BLOCK_SIZE)
            return i * BLOCK_SIZE;
      }
   }

   lookForlineEnd(mainLine, coord){
      for(let i = mainLine - 1; i >= 0; i--){
         if(coord + TANK_SIZE / 4 > i * BLOCK_SIZE)
            return i * BLOCK_SIZE;
      }
   }

   turnToLine(object, newVector){
      let 
         newLeft = object.Left, 
         newTop = object.Top;
  
         if(object.Vector == Vector.UP){
            if(newVector == Vector.LEFT)
               newTop = this.lookForlineEnd(this.Level.Bottom, object.Top);
            else if(newVector == Vector.RIGHT)
               newTop = this.lookForlineEnd(this.Level.Bottom, object.Top);
         }else if(object.Vector == Vector.DOWN){
            if(newVector == Vector.LEFT)
               newTop = this.lookForlineStart(this.Level.Bottom, object.Bottom) - object.Size;
            else if(newVector == Vector.RIGHT)
               newTop = this.lookForlineStart(this.Level.Bottom, object.Bottom) - object.Size;
         }else if(object.Vector == Vector.LEFT){
            if(newVector == Vector.UP)
               newLeft = this.lookForlineEnd(this.Level.Right, object.Left);
            else if(newVector == Vector.DOWN)
               newLeft = this.lookForlineEnd(this.Level.Right, object.Left);
         }else if(object.Vector == Vector.RIGHT){
            if(newVector == Vector.UP)
               newLeft = this.lookForlineStart(this.Level.Right, object.Right) - object.Size;
            else if(newVector == Vector.DOWN)
               newLeft = this.lookForlineStart(this.Level.Right, object.Right) - object.Size;
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

   get Shots(){
      return this.shots;
   }
}