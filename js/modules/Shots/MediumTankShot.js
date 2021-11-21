import AbstractShot from "../AbstractObjects/AbstractButtleObjects/AbstractShot.js";

export default class MediumTankShot extends AbstractShot{
   constructor(x, y, vector, owner){
      super(x, y, vector, owner);

      this.speed = 2;
   }
}