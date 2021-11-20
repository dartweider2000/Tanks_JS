export { TANK_SIZE, FLAG_SIZE, BLOCK_SIZE, SHOT_SIZE, Mode, Vector, Key, BrickState, AnimationFrame, FirstPlayerMoveKeys, 
   FirstPlayerShotKey, SecondPlayerMoveKeys, SecondPlayerShotKey, TankState, ShotState, Gor, Ver, LeftUp, RightDown };

const TANK_SIZE = 16;

const FLAG_SIZE = 16;

const BLOCK_SIZE = 8;

const SHOT_SIZE = 6;

const Mode = {
   MAIN_MENU : 0,
   PLAY_MENU : 1,
   CAREER : 2,
   PLAY_RANDOM_LEVEL : 3,
   OUTPUT_RESULT_LEVEL : 4,
   CHOOSE_TANK : 5
};

const Vector = {
   UP : 0,
   DOWN : 1,
   LEFT : 2,
   RIGHT : 3,
};

const Key = {
   UP : 0,
   DOWN : 1,
   LEFT : 2,
   RIGHT : 3,
};

const BrickState = {
   FULL : 0,
   UP : 1,
   DOWN : 2,
   LEFT : 3,
   RIGHT : 4,
   DEATH : 5
};

const TankState = {
   BORN : 0,
   LIVE : 1,
   BOOM_ANIMATION : 2,
   DEATH : 3,
}

const ShotState = {
   LIVE : 0,
   BOOM_ANIMATION : 1,
   DEATH : 2,
}

const AnimationFrame = {
   FIRST : 0,
   SECOND : 4
}

const FirstPlayerMoveKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

const FirstPlayerShotKey = 'ControlRight';

const SecondPlayerMoveKeys = ['KeyW', 'KeyS', 'KeyA', 'KeyD'];

const SecondPlayerShotKey = 'Space';

const Ver = [Vector.UP, Vector.DOWN];

const Gor = [Vector.LEFT, Vector.RIGHT];

const LeftUp = [Vector.LEFT, Vector.UP];

const RightDown = [Vector.RIGHT, Vector.DOWN];