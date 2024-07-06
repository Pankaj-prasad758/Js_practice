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


// const addition = addTwoNumbers(22,8) 
// console.log("Addition: ", addition)


function subNumber(num1,num2,num3){
//    console.log(num1 - num2 - num3);
// let result = num1 - num2 - num3
// return result
return num1 - num2 - num3
}
const result2 = subNumber(2,10,23)
// console.log("result: ", result);



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
// console.log(userLoggedIn("pankaj")) // gives undefine when you print this 


function minusNum(val1, val2){
// let asnwerVal = (val1 - val2);
// return asnwerVal
return val1 - val2
}
const  asnwerVal = minusNum(4,10)
// console.log("answer :-" ,asnwerVal);


function userLogin (username = "cook"){
    if (!username) {
        console.log("please enter your username");
        return
    }
    return`${username} just logged in`
    
}
console.log(userLogin("james")); // over write the value "cook"