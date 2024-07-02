//*if

if (true) {

}
if (false) { // not execute 

}
let temperatureValue = 41

if (temperatureValue < 42) {
    // console.log("orange zone be caution in afternoon");
}
else {
    // console.log("heat wave stay at your home");

}

score = 300

if (score > 100) {

    const power = "Hyper_run"
    // console.log(`hero power: ${power}`);
}
// console.log(`hero power: ${power}`); //* (output power is not define because it is out of scope)
//* never use var variable because it can acccessible from outside the scope


//** impicit scope */
//** execute in single line */
//*  curly braces not required
//** */  written in one line or we can use (,) or other line syntax 

balance = 1000
//  if (balance > 500) console.log("fine"),console.log("alert maintain your minimum balance");; //* remember this is not a good practice in coding 
//  score = 800

// if (score < 500) {
//     console.log("score in less than 500");
// } else if (score < 750) {
//     console.log("score is less than 750");
// } else if (score < 900) {
//     console.log("score in less than 900");

// }
// else {
//     console.log("score is more than 1000");
// }

const userDebitCard = true
const userLoggedIn = true

// *&& both condition must be true other wise code will never execute 
if (userDebitCard && userLoggedIn ) { //**and condition (&&) check both statement if they true we get result  */
    // console.log("allow the user");
}
else{
    // console.log("user not allow");
}
// * or operator (||) to check multiple condition
//* run if any one condition in true
// ex-

const userLoggedInFromGoogle = true
const userLoggedInFromEmail = false

if (userLoggedInFromGoogle || userLoggedInFromEmail || guestUser) {
    console.log("user logged in");
}
else {
    console.log("user login failed");
}