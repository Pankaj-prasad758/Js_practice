//Function

//**function syntax */

function myName(){
    // console.log("pankaj");
}

myName()

function addTwoNumbers(number1 , number2){
//   console.log(number1 + number2);
// let addition = number1 + number2
// return addition

//**another way  */
return number1 - number2
console.log("pankaj"); // never execute beacuse of return

}

const addition = addTwoNumbers(22,8) 
// console.log("Addition: ", addition)

function userLoggedIn(username = "Checked"){
    // if (username === undefined) {
    //     console.log("please enter username");
    //     return
    // }
    if (!username) {
        console.log("please enter username");
        return
    }
    return`${username} just logged in `
}
// console.log(userLoggedIn("pankaj"))
console.log(userLoggedIn("pankaj")) // gives undefine when you print this 