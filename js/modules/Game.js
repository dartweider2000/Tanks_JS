import Keyboard from "./Keyboard.js";
import World from "./World/World.js";
import View from "./View/View.js";

export default class Game{
   constructor(canv){
      this.keyboard = new Keyboard();
      this.world = new World();
      this.view = new View(canv, '../../img/SpriteWithoutBackground.png');

      this.loop = this.loop.bind(this);
   }

   async init(){
      this.View.init();
   }

   async start(){
      await this.init();

      requestAnimationFrame(this.loop);
   }

   loop(){
      this.World.update(this.Keyboard.ActiveKeys);
      this.View.render(this.World);

      //console.log(this.Keyboard.ActiveKeys);

      requestAnimationFrame(this.loop);
   }

   get Keyboard(){
      return this.keyboard;
   }

   get World(){
      return this.world;
   }

   get View(){
      return this.view;
   }
}