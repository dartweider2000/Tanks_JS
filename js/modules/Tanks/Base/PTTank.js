import AbstractTank from "../../AbstractObjects/AbstractButtleObjects/AbstractTank.js";
import PTTankShot from "../../Shots/PTTankShot.js";

export default class PTTank extends AbstractTank{
   constructor(indexX, indexY, vector){
      super(indexX, indexY, vector);

      this.speed = 1;
      this.coolDown = 700; //3000
   }

   shot(World){
      World.addShot(new PTTankShot(...this.getShotCoords(), this.Vector, this));
   }
}