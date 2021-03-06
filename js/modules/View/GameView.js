export default class GameView{
   constructor(){

   }

   render(World, CX, Sprite){
      World.Level.Road.forEach(block => block.render(CX, Sprite));
      World.Level.FlagPlace.forEach(block => block.render(CX, Sprite));
      World.Level.Water.forEach(block => block.render(CX, Sprite));
      World.Level.Iron.forEach(block => block.render(CX, Sprite));
      World.Level.Brick.forEach(block => block.render(CX, Sprite));

      //World.Level.Road.forEach(block => block.contur(CX));

     // World.Shots.render(CX, Sprite);

      World.FirstPlayer.render(CX, Sprite);
      World.SecondPlayer.render(CX, Sprite);

      World.Shots.render(CX, Sprite);

      World.Level.Grass.forEach(block => block.render(CX, Sprite));

      //World.Level.Road.forEach(block => block.contur(CX));
   }
}