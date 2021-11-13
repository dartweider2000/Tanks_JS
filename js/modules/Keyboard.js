export default class Keyboard{
   constructor(){
      this.activeKeys = new Set();

      document.addEventListener('keydown', ({code}) => {
         this.activeKeys.add(code);
      });

      document.addEventListener('keyup', ({code}) => {
         this.activeKeys.delete(code);
      });
   }

   get ActiveKeys(){
      return this.activeKeys;
   }
}