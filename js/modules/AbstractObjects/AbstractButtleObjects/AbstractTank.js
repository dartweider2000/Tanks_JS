import AbstractButtleObject from "./AbstractButtleObject.js";
import { Vector, TANK_SIZE, AnimationFrame, TankState, Gor, Ver, SHOT_SIZE } from "../../math.js";

export default class AbstractTank extends AbstractButtleObject{
   constructor(indexX, indexY, vector = Vector.UP){
      super(indexX, indexY, vector);

      this.healthPoint = null;
      this.coolDown = null;
      this.canShot = true;

      this.animationFrame = AnimationFrame.FIRST;
      this.state = TankState.BORN;

      this.size = TANK_SIZE;
   }

   get Frame(){
      //if(this.State == TankState.BORN)
      //   return 
   }

   changeVector(newVector){
      this.vector = newVector;
   }

   update(World, {moveKey, shotKey}){
      if(moveKey !== null){
         this.setAnimationFrame();

         if(Gor.includes(this.Vector) && Ver.includes(moveKey) || Gor.includes(moveKey) && Ver.includes(this.Vector)){
            this.setCoords(...World.turnToLine(this, moveKey));
            this.turn(moveKey);
         }else
            this,this.changeVector(moveKey);

         this.move(World);
      }

      if(shotKey && this.CanShot){
         this.shot(World);

         this.reload();
      }

      //console.log(this.CanShot);
         
   }

   getShotCoords(){
      let shotLeft, shotTop;

      if(this.Vector == Vector.UP){
         shotLeft = this.Left + this.Size / 2 - SHOT_SIZE / 2;
         shotTop = this.Top;
      }else if(this.Vector == Vector.DOWN){
         shotLeft = this.Left + this.Size / 2 - SHOT_SIZE / 2;
         shotTop = this.Bottom - SHOT_SIZE;
      }else if(this.Vector == Vector.LEFT){
         shotLeft = this.Left;
         shotTop = this.Top + this.Size / 2 - SHOT_SIZE / 2;
      }else if(this.Vector == Vector.RIGHT){
         shotLeft = this.Right - SHOT_SIZE;
         shotTop = this.Top + this.Size / 2 - SHOT_SIZE / 2;
      }

      return [shotLeft, shotTop];
   }

   shot(){

   }

   move(World){
      let newLeft = 0, newTop = 0; 

      if(this.Vector == Vector.UP){
         newLeft = this.Left;
         newTop = this.Top - this.Speed;
      }else if(this.Vector == Vector.DOWN){
         newLeft = this.Left;
         newTop = this.Top + this.Speed;
      }else if(this.Vector == Vector.LEFT){
         newLeft = this.Left - this.Speed;
         newTop = this.Top;
      }else if(this.Vector == Vector.RIGHT){
         newLeft = this.Left + this.Speed;
         newTop = this.Top;
      }

      this.setCoords(...World.canMoveTank(this, newLeft, newTop, newLeft + this.Size, newTop + this.Size)); 
   }

   async reload(){
      return new Promise(resolve => {
         this.CanShot = false;
         setTimeout(() => {
            this.CanShot = true;
            //console.log('!!');
            resolve();
         }, this.CD);
      });
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