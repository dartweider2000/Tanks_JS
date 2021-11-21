export default class Keyboard{
   constructor(){
      this.activeKeys = new Set();

      document.addEventListener('keydown', ({code}) => {
         this.preventDefault(event);

         this.activeKeys.add(code);
      });

      document.addEventListener('keyup', ({code}) => {
         this.activeKeys.delete(code);
      });
   }

   get ActiveKeys(){
      return this.activeKeys;
   }

   preventDefault(event){
      if(event.code == 'KeyS' && event.ctrlKey)
         event.preventDefault(); 
   }
}