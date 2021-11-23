import AbstractTank from "../../AbstractObjects/AbstractButtleObjects/AbstractTank.js";
import MediumTankShot from "../../Shots/MediumTankShot.js";

export default class MediumTank extends AbstractTank{
   constructor(indexX, indexY, vector){
      super(indexX, indexY, vector);

      this.speed = 1;
      this.coolDown = 1000;
   }

   shot(World){
      World.addShot(new MediumTankShot(...this.getShotCoords(), this.Vector, this));
   }
}