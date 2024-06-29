//** Arrow function */

// // const user = {
//     name:"pankaj",
//     mobileNumber: 5556667771,
//     getMessage : function(){
//         // console.log(`${this.name}, welcome back on sunrise resort`);
//         // console.log(this);
//     }
// }
// user.getMessage()
// user.name = "harsh"
// user.getMessage()
// console.log(this);

function checkThis(){
    // console.log(this);
}
// checkThis()

function run() {
    let gun = "M16"
    console.log(this.gun);
}
run()  // **Output undefine,  beacuse this key word works only in object not in function
const rifle = function () {
    let username = "headhunter"
    // console.log(this.username);
}
rifle()  // output undefine


const rifleNew =  () => {            // Arrow function
    let username = "headhunter"
    // console.log(this.username);
    // console.log(this); // output empty {}
}
rifleNew()  // output undefine

//** Expicit return */
 const addVal = (num1 , num2) => { // must use Return key word
    return num1 + num2
 }
//  console.log(addVal(19 ,1));

 //**Impicit return */

 const addNum = (num1, num2) => num1 + num2 // no need to add return key word or use curly bracket
 const addNum2 = (num1, num2) => (num1 + num2) // why we use parenthesis becuase without parenthesis we cannot access object in Impicit return
//  console.log(addNum(9,19));
//  console.log(addNum2(9,19));
 const drink = () => {
    let coofee = 100
    console.log(this);
 }
//  drink() // output gives empty object
const userPassword = function (){
console.log( this);
}
// console.log(userPassword());

// const userHistory = function(){
//    var user = 10
//    console.log(user);
 
// }
// console.log(userHistory());
//  var user = 20
 
const pan = "pankaj"
let aka = "shadow"
var world = "alone King"

// console.table([pan, aka,world])
let b = 1
let a = ++b // prefix
// console.log(a);
let c = b++
// console.log(c);

const dummy = new String("funday never exist")
// console.log(dummy.includes("fun"));
// console.log(dummy.replace("fun","boring "));
// console.log(dummy.substring(0,4)); // last val not count (4)
// console.log(dummy.split()); // convert string into array
// console.log(dummy.slice(0,4));


const arra = [-1997.90990, 2000,30000]
// console.log(birthday.toFixed(2));
// console.log(birthday.toPrecision(4));
// console.log(Math.max(...arra));
// console.log(Math.floor(...arra));
// console.log(Math.floor(...arra));
// console.log(Math.random(...arra ) * 10 + 10);
console.log(Math.abs(...arra ));
console.log(Math.min(...arra ));

