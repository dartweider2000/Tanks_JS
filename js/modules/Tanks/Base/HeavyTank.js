import AbstractTank from "../../AbstractObjects/AbstractButtleObjects/AbstractTank.js";
import HeavyTankShot from "../../Shots/HeavyTankShot.js";

export default class HeavyTank extends AbstractTank{
   constructor(indexX, indexY, vector){
      super(indexX, indexY, vector);

      this.speed = 1;
      this.coolDown = 500; //2000
   }

   shot(World){
      World.addShot(new HeavyTankShot(...this.getShotCoords(), this.Vector, this));
   }
}