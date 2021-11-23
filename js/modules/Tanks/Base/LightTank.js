import AbstractTank from "../../AbstractObjects/AbstractButtleObjects/AbstractTank.js";
import LightTankShot from "../../Shots/LightTankShot.js";

export default class LightTank extends AbstractTank{
   constructor(indexX, indexY, vector){
      super(indexX, indexY, vector);

      this.speed = 2;
      this.coolDown = 500;
   }

   shot(World){
      World.addShot(new LightTankShot(...this.getShotCoords(), this.Vector, this));
   }
}