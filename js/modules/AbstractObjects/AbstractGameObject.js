import { BLOCK_SIZE } from "../math.js";

export default class AbstractGameObject{
   constructor(indexX, indexY){
      if(indexX != undefined &&  indexY != undefined){
         this.x = indexX * BLOCK_SIZE;
         this.y = indexY * BLOCK_SIZE;
      }

      this.frame = [];
      this.size = BLOCK_SIZE;
   }

   update(){

   }

   render(CX, Sprite){
      CX.drawImage(Sprite, ...this.Frame,
         this.Left, this.Top, this.Size, this.Size);
   }

   get Size(){
      return this.size;
   }

   get Frame(){
      return this.frame;
   }

   get Left(){
      return this.x;
   }

   set Left(x){
      this.x = x;
   }

   get Top(){
      return this.y;
   }

   set Top(y){
      this.y = y;
   }

   get Right(){
      return this.Left + this.Size;
   }

   get Bottom(){
      return this.Top + this.Size;
   }

   get X(){
      return this.Left / BLOCK_SIZE;
   }

   get Y(){
      return this.Top / BLOCK_SIZE;
   }
}