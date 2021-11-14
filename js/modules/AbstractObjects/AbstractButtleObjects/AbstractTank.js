import AbstractButtleObject from "./AbstractButtleObject.js";
import { Vector, TANK_SIZE } from "../../math.js";

export default class AbstractTank extends AbstractButtleObject{
   constructor(indexX, indexY, vector = Vector.UP){
      super(indexX, indexY, vector);

      this.healthPoint = null;
      this.coolDown = null;
      this.canShot = false;

      this.size = TANK_SIZE;
   }

   update(gameWorld, keys){

   }

   shot(){

   }

   move(){

   }

   async reload(){

   }

   turn(newVector){
      this.vector = newVector;
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