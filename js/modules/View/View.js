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

   render(World){
      if(World.Mode == Mode.MAIN_MENU){
         this.MainMenuView.render(World.MainMenuWorld, this.CX, this.Sprite);
      }else if(World.Mode == Mode.CAREER){
         this.GameView.render(World.GameWorld, this.CX, this.Sprite);
      }else if(World.Mode == Mode.PLAY_MENU){
         this.PlayMenuView.redner(World.PlayMenuWorld, this.CX, this.Sprite);
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