import AbstractButtleObject from "./AbstractButtleObject.js";
import { Vector, TANK_SIZE, AnimationFrame, ButtleState } from "../../math.js";

export default class AbstractTank extends AbstractButtleObject{
   constructor(indexX, indexY, vector = Vector.UP){
      super(indexX, indexY, vector);

      this.healthPoint = null;
      this.coolDown = null;
      this.canShot = false;

      this.animationFrame = AnimationFrame.FIRST;

      this.size = TANK_SIZE;
   }

   update(World, {moveKey, shotKey}){
      if(moveKey !== null){
         this.setAnimationFrame();

         if(this.Vector != moveKey)
            this.turn(moveKey);

         this.move(World);

         console.log(...this.Frame);
      }

      if(shotKey)
         this.shot();
   }

   shot(){

   }

   move(World){
      let newLeft = 0, newTop = 0; 

      if(this.Vector == Vector.UP){
         //World.canMove(this, this.Left, this.Top - this.Speed);
         newLeft = this.Left;
         newTop = this.Top - this.Speed;
      }else if(this.Vector == Vector.DOWN){
         //World.canMove(this, this.Left, this.Top + this.Speed);
         newLeft = this.Left;
         newTop = this.Top + this.Speed;
      }else if(this.Vector == Vector.LEFT){
         //World.canMove(this, this.Left - this.Speed, this.Top);
         newLeft = this.Left - this.Speed;
         newTop = this.Top;
      }else if(this.Vector == Vector.RIGHT){
         //World.canMove(this, this.Left + this.Speed, this.Top);
         newLeft = this.Left + this.Speed;
         newTop = this.Top;
      }

      if(World.canMove(this, newLeft, newTop))
         this.setCoords(newLeft, newTop);
      
   }

   async reload(){

   }

   turn(newVector){
      this.vector = newVector;
   }

   setAnimationFrame(){
      if(this.AnimationFrame == AnimationFrame.FIRST)
         this.AnimationFrame = AnimationFrame.SECOND;
      else
         this.AnimationFrame = AnimationFrame.FIRST;
   }

   get Frame(){
      return this.frame[this.Vector + this.AnimationFrame];
   }

   get AnimationFrame(){
      return this.animationFrame;
   }

   set AnimationFrame(animationFrame){
      this.animationFrame = animationFrame;
   }

   get HP(){
      return this.healthPoint;
   }

   set HP(healthPoint){
      this.healthPoint = healthPoint;
   }

   get CD(){
      return this.coolDown;
   }

   get CanShot(){
      return this.canShot;
   }

   set CanShot(canshot){
      this.canShot = canshot;
   }
}