import { TankState } from "../math.js";

export default class Player{
   constructor(tank = null){
      this.tank = tank;

      this.lives = 3;
      this.killes = 0;
      this.score = 0;
   }

   spawn(newLeft, newTop){
      this.Tank.setCoors(newLeft, newTop);
   }

   update(World, keys){
      if(keys.moveKey !== null || keys.shotKey)
         this.Tank.update(World, keys);

      if(this.Tank.isLive())
         ;
   }

   render(CX, Sprite){
      this.Tank.render(CX, Sprite);
   }

   get Tank(){
      return this.tank;
   }

   set Tank(tank){
      this.tank = tank;
   }

   get Lives(){
      return this.lives;
   }

   set Lives(lives){
      this.lives = lives;
   }

   get Killes(){
      return this.killes;
   }

   set Killes(killes){
      this.killes = killes;
   }

   get Score(){
      return this.score;
   }

   set Score(score){
      this.score = score;
   }
}