import Sprite from "../Sprite.js";
import GameView from "./GameView.js";
import MainMenuView from "./MainMenuView.js";
import PlayMenuView from "./PlayMenuView.js";
import { Mode } from "../math.js";

export default class View{
   constructor(canv, src){
      this.gameView = new GameView();
      this.mainMenuView = new MainMenuView();
      this.playMenuView = new PlayMenuView();

      this.canv = canv;
      this.cx = this.Canv.getContext('2d');

      this.sprite = new Sprite(src);
   }

   async init(){
      await this.sprite.init();
   }

   render(world){
      if(world.Mode == Mode.MAIN_MENU){
         this.MainMenuView.render(this.CX, this.Sprite);
      }else if(world.Mode == Mode.CAREER){
         this.GameView.render(this.CX, this.Sprite);
      }else if(world.Mode == Mode.PLAY_MENU){
         this.PlayMenuView.redner(this.CX, this.Sprite);
      }
   }

   get GameView(){
      return this.gameView;
   }

   get MainMenuView(){
      return this.mainMenuView;
   }

   get PlayMenuView(){
      return this.playMenuView;
   }

   get Canv(){
      return this.canv;
   }

   get CX(){
      return this.cx;
   }

   get Sprite(){
      return this.sprite.Img;
   }
}