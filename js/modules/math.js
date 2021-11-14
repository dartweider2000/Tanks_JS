export { TANK_SIZE, FLAG_SIZE, BLOCK_SIZE, SHOT_SIZE, Mode, Vector, Key, FirstPlayerMoveKeys, 
   FirstPlayerShotKey, SecondPlayerMoveKeys, SecondPlayerShotKey };

const TANK_SIZE = 16;

const FLAG_SIZE = 16;

const BLOCK_SIZE = 8;

const SHOT_SIZE = 3;

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

const FirstPlayerMoveKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

const FirstPlayerShotKey = 'ControlRight';

const SecondPlayerMoveKeys = ['KeyW', 'KeyS', 'KeyA', 'KeyD'];

const SecondPlayerShotKey = 'Space';