import AbstractGameObject from "../AbstractGameObject.js";
import { ButtleState } from "../../math.js";

export default class AbstractButtleObject extends AbstractGameObject{
   constructor(indexX, indexY, vector){
      super(indexX, indexY);

      this.vector = vector;
      this.damage = null;
      this.speed = null;

      this.state = ButtleState.LIVE;
   }

   move(){
      
   }

   setCoords(newLeft, newTop){
      this.Left = newLeft;
      this.Top = newTop;
   }

   isLive(){
      return this.State == ButtleState.LIVE;
   }

   get State(){
      return this.state;
   }

   get Frame(){
      return this.frame[this.Vector];
   }

   get Damage(){
      return this.damage;
   }

   get Speed(){
      return this.speed;
   }

   get Vector(){
      return this.vector;
   }

   get X(){
      return this.Left;
   }

   get Y(){
      return this.Top;
   }
}