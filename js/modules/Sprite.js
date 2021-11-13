export default class Sprite{
   constructor(src){
      this.img = new Image();
      this.src = src;
   }

   async init(){
      await this.load();
   }

   async load(){
      return new Promise((resolve, reject) => {
         this.img.src = this.Src;

         this.Img.addEventListener('load', resolve);
         this.Img.addEventListener('error', reject);
      });
   }

   get Img(){
      return this.img;
   }

   get Src(){
      return this.src;
   }
}