import AbstractGameObject from "../AbstractGameObject.js";

export default class AbstractButtleObject extends AbstractGameObject{
   constructor(indexX, indexY, vector){
      super(indexX, indexY);

      this.vector = vector;
      this.damage = null;
      this.speed = null;
   }

   move(){
      
   }

   setCoords(newLeft, newTop){
      this.Left = newLeft;
      this.Top = newTop;
   }

   get Frame(){
      return this.frame[this.vector];
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