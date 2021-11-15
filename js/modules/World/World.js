import { Mode } from "../math.js";
import GameWorld from "./GameWorld.js";
import MainMenuWorld from "./MainMenuWorld.js";
import PlayMenuWorld from "./PlayMenuWorld.js";
import Levels from "../Levels/Levels.js";

export default class World{
   constructor(){
      this.levels = new Levels();

      this.gameWorld = new GameWorld(this.getLevel(1));
      this.mainMenuWorld = new MainMenuWorld();
      this.playMenuWorld = new PlayMenuWorld();

      this.mode = Mode.CAREER;
   }

   update(activeKeys){
      if(this.Mode == Mode.MAIN_MENU){
         this.MainMenuWorld.update(activeKeys);
      }else if(this.Mode == Mode.CAREER){
         this.GameWorld.update(activeKeys);
      }else if(this.Mode == Mode.PLAY_MENU){
         this.PlayMenuWorld.update(activeKeys);
      }
   }

   getLevel(number){
      return this.Levels.getLevel(number);
   }

   get Levels(){
      return this.levels
   }

   get GameWorld(){
      return this.gameWorld;
   }

   get MainMenuWorld(){
      return this.mainMenuWorld;
   }

   get PlayMenuWorld(){
      return this.playMenuWorld;
   }

   get Mode(){
      return this.mode;
   }

   set Mode(mode){
      this.mode = mode;
   }
}