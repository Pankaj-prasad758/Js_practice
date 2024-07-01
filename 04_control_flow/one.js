//*if

if(true){

}
if(false){ // not execute 

}
 let temperatureValue = 41

// if( temperatureValue < 42){
// console.log("orange zone be caution in afternoon");
// }
// else{
// console.log("heat wave stay at your home");

// }

score = 300

// if(score > 100){
  
//     const power = "Hyper_run"
//     console.log(`hero power: ${power}`);
// }
// console.log(`hero power: ${power}`);


//** impicit scope */
//** execute in single line */
//*  curly braces not required
//** */  written in one line or we can use (,) or other line syntax 

balance = 1000
//  if (balance > 500) console.log("fine"),console.log("alert maintain your minimum balance");; //* remember this is not a good practice in coding 
//  if(balance < 500){
//     console.log("balance is less than 500");
//  }
//  else if(balance < 750){
//     console.log("balance is less than 750");}
 
//     else if(balance < 900){
//     console.log("balance in less than 900");}
//     else{
//         console.log("balance in less than 1500");
//     }

    const userDebitCard = true
    const userLoggedIn = true
    
    // *&& both condition must be true other wise code will never execute 
    if(userDebitCard && userDebitCard && 2==2){ //**and condition (&&) check both statement if they true we get result  */
        // console.log("allow the user");
    }
   
    // * or operator (||) to check multiple condition
    //* run if any one condition in true
    // ex-

    const userLoggedInFromGoogle = false
    const userLoggedInFromEmail = true

    if(userLoggedInFromGoogle || userLoggedInFromEmail){
        console.log("user logged in");
    }
    else{
        console.log("user login failed");
    }