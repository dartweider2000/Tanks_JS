import Sprite from "../Sprite.js";

export default class View{
   constructor(canv, src){
      this.canv = canv;
      this.cx = this.Canv.getContext('2d');

      this.sprite = new Sprite(src);
   }

   async init(){
      await this.sprite.init();
   }

   render(world){

   }

   get Canv(){
      return this.canv;
   }

   get CX(){
      return this.cx;
   }

   get Sprite(){
      this.sprite.Img;
   }
}