//**Truthy and falsy */

let userGmail = []

// if(userEmail){
//     console.log("got user email");

// }
// else{
//     console.log("user email empty");
// }

//* how to Array 
if (userGmail.length === 0) {
    console.log("Array is empty");
}

const newObj = {}

if (Object.keys(newObj).length === 0) {
    console.log("object in empty");
}

//*Truthy values

//*1) " " - String with one space
//*2) "0",
//*3) "false",
//*4) "pankaj",
//*5) [] - empty Array.
//*6) {} - empty object,
//*7) function(){} - empty function


//*Falsy values
//*1) ""-empty String
//*2) false
//*3) 0
//*4) -0
//*5) BigInt 0n
//*6) null
//*7) undefine
//*8) NaN

//* false == 0 //output true
//* 0 == "" //output true
//* false == "" //output true

//*Nullish coalescing operator (??): null undefine

//*The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

let val1;
val1 = 5 ?? 10
val1 = undefined ?? 10
val1 = undefined ?? null
val1 = null ?? "pankaj" ?? 14 // assign first val after nall which in "pankaj"
console.log(val1);

let fishing = null ?? undefined ?? "total error 5"
console.log(fishing);


//* (ternary) operator (?)

let coffeePrice = 199
coffeePrice <= 100 ? console.log("less than 100") : console.log("more than 100");