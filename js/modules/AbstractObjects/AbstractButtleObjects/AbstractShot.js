import AbstractButtleObject from "./AbstractButtleObject.js";
import { ShotState, SHOT_SIZE, TankState, TANK_SIZE, Vector } from "../../math.js";

export default class AbstractShot extends AbstractButtleObject{
   constructor(x, y, vector, owner){
      super(null, null, vector);

      this.x = x;
      this.y = y;

      this.size = SHOT_SIZE;
      this.state = ShotState.LIVE;

      this.frame = [
         [20 * TANK_SIZE + this.Size * 0.25, 6.5 * TANK_SIZE - this.Size / 2, this.Size, this.Size],
         [20 * TANK_SIZE + this.Size * 2.90, 6.5 * TANK_SIZE - this.Size / 2, this.Size, this.Size],
         [20 * TANK_SIZE + this.Size * 1.5, 6.5 * TANK_SIZE - this.Size / 2, this.Size, this.Size],
         [20 * TANK_SIZE + this.Size * 4, 6.5 * TANK_SIZE - this.Size / 2, this.Size, this.Size],
      ];

      this.boomFrame = [
         [16 * TANK_SIZE, 8 * TANK_SIZE, TANK_SIZE, TANK_SIZE],
         [17 * TANK_SIZE, 8 * TANK_SIZE, TANK_SIZE, TANK_SIZE],
         [18 * TANK_SIZE, 8 * TANK_SIZE, TANK_SIZE, TANK_SIZE],
      ]

      this.owner = owner;
   }

   get Owner(){
      return this.owner;
   }

   get Frame(){
      if(this.State == ShotState.LIVE)
         return super.Frame;
      else if(this.State == ShotState.BOOM_ANIMATION)
         return this.BoomFrame;
   }

   render(CX, Sprite){
      if(this.State == ShotState.LIVE)
         super.render(CX, Sprite);
      else if(this.State == ShotState.BOOM_ANIMATION)
         this.drawBoom(CX, Sprite);
   }

   drawBoom(CX, Sprite){
      CX.drawImage(Sprite, ...this.Frame,
         this.Left - TANK_SIZE / 3, this.Top - TANK_SIZE / 3, TANK_SIZE, TANK_SIZE);
   }

   async doBoomFrame(){
      const ms = 60;
      const wait = async ms => {
         return new Promise(resolve => {
            setTimeout(resolve, ms);
         });
      };

      return new Promise(async resolve => {
         await wait(ms);
         this.BoomAnimationFrame++;
         await wait(ms);
         this.BoomAnimationFrame++;
         await wait(ms);
         this.State = ShotState.DEATH;
         resolve();
      });
   }

   get BoomFrame(){
      return this.boomFrame[this.BoomAnimationFrame];
   }

   update(World){
      if(this.State == ShotState.LIVE){
         this.move(World);
      }
   }

   setNewCoords(){
      if(this.Vector == Vector.UP)
         this.Top -= this.Speed;
      else if(this.Vector == Vector.DOWN)
         this.Top += this.Speed;
      else if(this.Vector == Vector.LEFT)
         this.Left -= this.Speed;
      else if(this.Vector == Vector.RIGHT)
         this.Left += this.Speed;
   }

   move(World){
      //this.setNewCoords();

      if(!World.canMoveShot(this, this.Left, this.Top, this.Right, this.Bottom)){
         this.State = ShotState.BOOM_ANIMATION;
         this.doBoomFrame();
      }

      this.setNewCoords();
   }
}