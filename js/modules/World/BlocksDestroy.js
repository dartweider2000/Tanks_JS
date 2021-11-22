import Brick from "../Blocks/Brick.js";
import Iron from '../Blocks/Iron.js';
import { BrickState, Vector } from "../math.js";

export default class BlocksDestroy{
   constructor(){

   }

   order(blocks){
      return blocks.reduce((result, block) => {
         if(block instanceof Brick)
            result[0].push(block);
         else if(block instanceof Iron)
            result[1].push(block);

         return result
      }, [[], []]);
   }

   firtsOrSecond(state, first, second){
      if(first.State == state || second.State == state)
         return true;
      else
         return false;
   }

   firtsOrSecondNot(state, first, second){
      if(first.State != state || second.State != state)
         return true;
      else
         return false;
   }

   setState(condition, goal, brick){
      brick.forEach(brick => {
         if(brick.State == condition)
            brick.State = goal;
      });
   }

   setStateBoth(condition_1, goal_1, condition_2, goal_2, brick){
      this.setState(condition_1, goal_1, brick);
      this.setState(condition_2, goal_2, brick);
   }

   both(brick, state){
      brick[0].State = state;
      brick[1].State = state;
   }

   destroy(Shot, blocks){
      const [brick, iron] = this.order(blocks);

      if(brick.length == 2){
         if(brick[0].State == BrickState.FULL && brick[1].State == BrickState.FULL)
            this.both(brick, Shot.Vector);
         else if(brick[0].State == brick[1].State && brick[0].State != BrickState.FULL && brick[1].State != BrickState.FULL)
            this.both(brick, BrickState.DEATH);
         else if(brick[0].State != brick[1].State && brick[0].State != BrickState.FULL && brick[1].State != BrickState.FULL){
            if(Shot.Vector == Vector.RIGHT && this.firtsOrSecond(BrickState.LEFT, brick[0], brick[1]) && this.firtsOrSecond(BrickState.RIGHT, brick[0], brick[1]))
               this.setState(BrickState.LEFT, BrickState.DEATH, brick);
            else if(Shot.Vector == Vector.LEFT && this.firtsOrSecond(BrickState.LEFT, brick[0], brick[1]) && this.firtsOrSecond(BrickState.RIGHT, brick[0], brick[1]))
               this.setState(BrickState.RIGHT, BrickState.DEATH, brick);
            else if(Shot.Vector == Vector.UP && this.firtsOrSecond(BrickState.UP, brick[0], brick[1]) && this.firtsOrSecond(BrickState.DOWN, brick[0], brick[1]))
               this.setState(BrickState.DOWN, BrickState.DEATH, brick);
            else if(Shot.Vector == Vector.DOWN && this.firtsOrSecond(BrickState.UP, brick[0], brick[1]) && this.firtsOrSecond(BrickState.DOWN, brick[0], brick[1]))
               this.setState(BrickState.UP, BrickState.DEATH, brick);
            else if(Shot.Vector == Vector.LEFT && this.firtsOrSecond(BrickState.UP, brick[0], brick[1]) && this.firtsOrSecond(BrickState.RIGHT, brick[0], brick[1]))
               this.both(brick, BrickState.DEATH);
            else if(Shot.Vector == Vector.LEFT && this.firtsOrSecond(BrickState.DOWN, brick[0], brick[1]) && this.firtsOrSecond(BrickState.RIGHT, brick[0], brick[1]))
               this.both(brick, BrickState.DEATH);
            else if(Shot.Vector == Vector.RIGHT && this.firtsOrSecond(BrickState.UP, brick[0], brick[1]) && this.firtsOrSecond(BrickState.LEFT, brick[0], brick[1]))
               this.both(brick, BrickState.DEATH);
            else if(Shot.Vector == Vector.RIGHT && this.firtsOrSecond(BrickState.DOWN, brick[0], brick[1]) && this.firtsOrSecond(BrickState.LEFT, brick[0], brick[1]))
               this.both(brick, BrickState.DEATH);
            else if(Shot.Vector == Vector.LEFT && this.firtsOrSecond(BrickState.UP, brick[0], brick[1]) && this.firtsOrSecond(BrickState.LEFT, brick[0], brick[1]))
               this.setState(BrickState.UP, BrickState.DEATH, brick);
            else if(Shot.Vector == Vector.RIGHT && this.firtsOrSecond(BrickState.UP, brick[0], brick[1]) && this.firtsOrSecond(BrickState.RIGHT, brick[0], brick[1]))
               this.setState(BrickState.UP, BrickState.DEATH, brick);
            else if(Shot.Vector == Vector.RIGHT && this.firtsOrSecond(BrickState.DOWN, brick[0], brick[1]) && this.firtsOrSecond(BrickState.RIGHT, brick[0], brick[1]))
               this.setState(BrickState.DOWN, BrickState.DEATH, brick);
            else if(Shot.Vector == Vector.LEFT && this.firtsOrSecond(BrickState.DOWN, brick[0], brick[1]) && this.firtsOrSecond(BrickState.LEFT, brick[0], brick[1]))
               this.setState(BrickState.DOWN, BrickState.DEATH, brick);
            else if((Shot.Vector == Vector.LEFT || Shot.Vector == Vector.RIGHT) && this.firtsOrSecond(BrickState.DOWN, brick[0], brick[1]) && this.firtsOrSecond(BrickState.UP, brick[0], brick[1]))
               this.both(brick, BrickState.DEATH);
            else if((Shot.Vector == Vector.UP || Shot.Vector == Vector.DOWN) && this.firtsOrSecond(BrickState.LEFT, brick[0], brick[1]) && this.firtsOrSecond(BrickState.RIGHT, brick[0], brick[1]))
               this.both(brick, BrickState.DEATH);
            else if(Shot.Vector == Vector.UP && this.firtsOrSecond(BrickState.DOWN, brick[0], brick[1]) && this.firtsOrSecond(BrickState.LEFT, brick[0], brick[1]))
               this.both(brick, BrickState.DEATH);
            else if(Shot.Vector == Vector.UP && this.firtsOrSecond(BrickState.UP, brick[0], brick[1]) && this.firtsOrSecond(BrickState.LEFT, brick[0], brick[1]))
               this.setState(BrickState.LEFT, BrickState.DEATH, brick);
            else if(Shot.Vector == Vector.UP && this.firtsOrSecond(BrickState.UP, brick[0], brick[1]) && this.firtsOrSecond(BrickState.RIGHT, brick[0], brick[1]))
               this.setState(BrickState.RIGHT, BrickState.DEATH, brick);
            else if(Shot.Vector == Vector.DOWN && this.firtsOrSecond(BrickState.UP, brick[0], brick[1]) && this.firtsOrSecond(BrickState.RIGHT, brick[0], brick[1]))
               this.both(brick, BrickState.DEATH);
            else if(Shot.Vector == Vector.DOWN && this.firtsOrSecond(BrickState.UP, brick[0], brick[1]) && this.firtsOrSecond(BrickState.LEFT, brick[0], brick[1]))
               this.both(brick, BrickState.DEATH);
            else if(Shot.Vector == Vector.DOWN && this.firtsOrSecond(BrickState.DOWN, brick[0], brick[1]) && this.firtsOrSecond(BrickState.RIGHT, brick[0], brick[1]))
               this.setState(BrickState.RIGHT, BrickState.DEATH, brick);
            else if(Shot.Vector == Vector.DOWN && this.firtsOrSecond(BrickState.DOWN, brick[0], brick[1]) && this.firtsOrSecond(BrickState.LEFT, brick[0], brick[1]))
               this.setState(BrickState.LEFT, BrickState.DEATH, brick);
            else if(Shot.Vector == Vector.UP && this.firtsOrSecond(BrickState.RIGHT, brick[0], brick[1]) && this.firtsOrSecond(BrickState.DOWN, brick[0], brick[1]))
               this.both(brick, BrickState.DEATH);      
         }else if(this.firtsOrSecond(BrickState.FULL, brick[0], brick[1]) && this.firtsOrSecondNot(BrickState.FULL, brick[0], brick[1]) && this.firtsOrSecondNot(BrickState.DEATH, brick[0], brick[1])){
            if(Shot.Vector == Vector.UP && this.firtsOrSecond(BrickState.UP, brick[0], brick[1]) && this.firtsOrSecond(BrickState.FULL, brick[0], brick[1]))
               this.setState(BrickState.FULL, Shot.Vector, brick);
            else if(Shot.Vector == Vector.DOWN && this.firtsOrSecond(BrickState.UP, brick[0], brick[1]) && this.firtsOrSecond(BrickState.FULL, brick[0], brick[1]))
               this.setStateBoth(BrickState.FULL, Shot.Vector, BrickState.UP, BrickState.DEATH, brick);
            else if(Shot.Vector == Vector.UP && this.firtsOrSecond(BrickState.DOWN, brick[0], brick[1]) && this.firtsOrSecond(BrickState.FULL, brick[0], brick[1]))
               this.setStateBoth(BrickState.FULL, Shot.Vector, BrickState.DOWN, BrickState.DEATH, brick);
            else if(Shot.Vector == Vector.DOWN && this.firtsOrSecond(BrickState.DOWN, brick[0], brick[1]) && this.firtsOrSecond(BrickState.FULL, brick[0], brick[1]))
               this.setState(BrickState.FULL, Shot.Vector, brick);
            else if((Shot.Vector == Vector.UP || Shot.Vector == Vector.DOWN) && this.firtsOrSecond(BrickState.LEFT, brick[0], brick[1]) && this.firtsOrSecond(BrickState.FULL, brick[0], brick[1]))
               this.setStateBoth(BrickState.FULL, Shot.Vector, BrickState.LEFT, BrickState.DEATH, brick);
            else if((Shot.Vector == Vector.UP || Shot.Vector == Vector.DOWN) && this.firtsOrSecond(BrickState.RIGHT, brick[0], brick[1]) && this.firtsOrSecond(BrickState.FULL, brick[0], brick[1]))
               this.setStateBoth(BrickState.FULL, Shot.Vector, BrickState.RIGHT, BrickState.DEATH, brick);
            else if(Shot.Vector == Vector.RIGHT && this.firtsOrSecond(BrickState.LEFT, brick[0], brick[1]) && this.firtsOrSecond(BrickState.FULL, brick[0], brick[1]))
               this.setStateBoth(BrickState.FULL, Shot.Vector, BrickState.LEFT, BrickState.DEATH, brick);
            else if(Shot.Vector == Vector.LEFT && this.firtsOrSecond(BrickState.RIGHT, brick[0], brick[1]) && this.firtsOrSecond(BrickState.FULL, brick[0], brick[1]))
               this.setStateBoth(BrickState.FULL, Shot.Vector, BrickState.RIGHT, BrickState.DEATH, brick);
            else if(Shot.Vector == Vector.LEFT && this.firtsOrSecond(BrickState.LEFT, brick[0], brick[1]) && this.firtsOrSecond(BrickState.FULL, brick[0], brick[1]))
               this.setState(BrickState.FULL, Shot.Vector, brick);
            else if(Shot.Vector == Vector.RIGHT && this.firtsOrSecond(BrickState.RIGHT, brick[0], brick[1]) && this.firtsOrSecond(BrickState.FULL, brick[0], brick[1]))
               this.setState(BrickState.FULL, Shot.Vector, brick);
            else if((Shot.Vector == Vector.LEFT || Shot.Vector == Vector.RIGHT) && this.firtsOrSecond(BrickState.DOWN, brick[0], brick[1]) && this.firtsOrSecond(BrickState.FULL, brick[0], brick[1]))
               this.setStateBoth(BrickState.FULL, Shot.Vector, BrickState.DOWN, BrickState.DEATH, brick);
            else if((Shot.Vector == Vector.LEFT || Shot.Vector == Vector.RIGHT) && this.firtsOrSecond(BrickState.UP, brick[0], brick[1]) && this.firtsOrSecond(BrickState.FULL, brick[0], brick[1]))
               this.setStateBoth(BrickState.FULL, Shot.Vector, BrickState.UP, BrickState.DEATH, brick);
         }
      }else if(brick.length == 1 && !iron.length){
         if(brick[0].State == BrickState.FULL){
               brick[0].State = Shot.Vector;
         }else
            brick[0].State = BrickState.DEATH;
      }else if(brick.length == 1 && iron.length == 1){
         if(brick[0].State == BrickState.FULL)
            brick[0].State = Shot.Vector;
      } 
   }
}