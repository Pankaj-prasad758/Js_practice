//** Arrow function */

const user = {
    name:"pankaj",
    mobileNumber: 5556667771,
    getMessage : function(){
        // console.log(`${this.name}, welcome back on sunrise resort`);
        // console.log(this);
    }
}
// user.getMessage()
user.name = "harsh"
// user.getMessage()
console.log(this);

function checkThis(){
    // console.log(this);
}
// checkThis()

function run() {
    let gun = "M16"
    // console.log(this.gun);
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
 console.log(addVal(19 ,1));

 //**Impicit return */

 const addNum = (num1, num2) => num1 + num2 // no need to add return key word or use curly bracket
 const addNum2 = (num1, num2) => (num1 + num2) // why we use parenthesis becuase without parenthesis we cannot access object in Impicit return
 console.log(addNum(9,19));
 console.log(addNum2(9,19));
