// Primitive datatypes
// 1)String 2)Boolean 3)Number 4)Null 5)Undefine 6)BigInt 7)Symbol
 
const score = 90
const scoreValue = 90.9
const outSideTemp = null
const userLoggedIn = false
const userName = "Shadow"
const userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')
//console.log(id === anotherId);
const bigNumber =78998789982932761515151515111515n
//console.log(bigNumber);

const exArray = ["hunt","hide","hussle","hunger"]
console.log(typeof exArray);
const productDetials = {
    name:"hangover",
    age:34,
    place:"Mexico"
}
//console.log(productDetials);

let myFunction = function(){
    console.log("hello planet earth");
   
}
//console.log(myFunction());

// Non Primitive datatypes or Reference
//Array
//Object
//Functions

///************************* Stack & Heap*************************************/

//Stack (Primitive) , Heap (Non Primitive)

firstName = "Wonderwoman"
secondName = firstName
console.log(secondName);
secondName ="SuperMan"
console.log(firstName);
console.log(secondName);

userOne = {
    email:"goodbye@yahoo.com",
    place:"Goa"
}

userTwo = userOne

userTwo.place = "Kerala"

console.log(userOne);
console.log(userTwo);