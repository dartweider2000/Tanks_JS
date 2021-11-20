import { ShotState } from "../math.js";

export default class Shots{
   constructor(){
      this.shots = [];
   }

   update(World){
      if(this.hasShots())
         this.Shots.forEach(shot => {
            shot.update(World);

            this.checkDeath(shot);
         });

      //console.log(this.Shots);
   }

   checkDeath(shot){
      if(shot.State == ShotState.DEATH)
         this.Shots.splice(this.Shots.indexOf(shot), 1);
   }

   render(CX, Sprite){
      if(this.hasShots())
         this.Shots.forEach(shot => shot.render(CX, Sprite));
   }

   add(shot){
      this.Shots.push(shot);
   }

   hasShots(){
      return this.Shots.length;
   }

   get Shots(){
      return this.shots;
   }
}