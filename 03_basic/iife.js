//**Immediately Invoked Function Expressions (IIFE) */

(function garamMasala(){
  // console.log(`john and akshay`);
})();

(function(){ //Nmaed iife
    // console.log("pankaj");
})();  // ** remember when we use iife we must carefull about (;) after the execution

((name,price) => { //UnNamed iife
    // console.log(`${name} and ${price}`); //*8 how to pass variables in iife syntax
})("khali",999);
//** */ IIFE (Immediately Invoked Function Expression): A function that runs as soon as it is defined.
// *8Purpose: To avoid polluting the global scope and to create a local scope for variables and functions.
// **Syntax: (function() { /* code */ })();
// ****IIFEs are useful for encapsulating code and managing scope in JavaScript.

(function username(customer,order){
    var password = "123asd"
      // console.log(`customer password ${password} customer name ${customer} order ${order}`);
})("mukund",100)
// console.log(username());

// console.log(garamMasala());


// function funcode(){
//   const userNick = "putiyaa"
//   function boring(){
//     const getUser = " pushkar"
//     console.log(userNick + getUser);
//   }
//   boring()
// // console.log(getUser);
// }
// funcode()
// // console.log(userNick);

// const userName = function(){
//   const firstname = "pankaj"
//   return firstname
// }
// console.log(userName());


// console.log(Math.pow(2,2));

let a = 9
let b = 2

function pythGorus(a, b){
  let c = a * a + b * b
  console.log(c);
  
}
pythGorus(12,41)