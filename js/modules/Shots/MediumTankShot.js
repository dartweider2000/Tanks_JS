import AbstractShot from "../AbstractObjects/AbstractButtleObjects/AbstractShot.js";

export default class MediumTankShot extends AbstractShot{
   constructor(x, y, vector){
      super(x, y, vector);

      this.speed = 2;
   }
}