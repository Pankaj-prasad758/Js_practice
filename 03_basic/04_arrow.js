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
    console.log(this);
}
// checkThis()

function run() {
    let gun = "M16"
    console.log(this.gun);
}
run()  // **Output undefine,  beacuse this key word works only in object not in function
const rifle = function () {
    let username = "headhunter"
    console.log(this.username);
}
rifle()  // output undefine


const rifleNew =  () => {            // Arrow function
    let username = "headhunter"
    console.log(this.username);
    console.log(this); // output empty {}
}
rifleNew()  // output undefine