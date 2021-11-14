import Sprite from "../Sprite.js";
import GameView from "./GameView.js";
import MainMenuView from "./MainMenuView.js";
import PlayMenuView from "./PlayMenuView.js";

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
      if(this.Mode == Mode.MAIN_MENU){
         this.MainMenuWorld.render(this.CX, this.Sprite);
      }else if(this.Mode == Mode.CAREER){
         this.GameWorld.render(this.CX, this.Sprite);
      }else if(this.Mode == Mode.PLAY_MENU){
         this.PlayMenuWorld.redner(this.CX, this.Sprite);
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