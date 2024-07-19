// generate random color

const randomColor = function(){
   const hex = "0123456789ABCDEF";
   let color = "#";
   for(i = 0; i < 6; i++){
      color += hex[Math.floor(Math.random() * 16)]
   } 
   return color;
}

let stopchangeBg;
const startChangingColor = function(){
   const startchangeBg = function(){
      document.body.style.backgroundColor = randomColor()
  
     }
  
   if(!stopchangeBg){
      stopchangeBg = setInterval(startchangeBg,1000)
   }
  
}
const stopChangingColor = function(){
clearInterval(stopchangeBg)
stopchangeBg = null;
}

document.querySelector("#start").addEventListener('click',startChangingColor)
document.querySelector("#stop").addEventListener('click',stopChangingColor)