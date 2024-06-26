//**rest operator */

function addToCartNumbers(val1,val2,...num1){
 return num1
}
console.log(addToCartNumbers(100,299,399,899))

const user = {
    username: "pankaj",
    userpassword: "123abc"

}

function userDetails(anyObject) {
    console.log(`username name is ${anyObject.username} and userpassword is ${anyObject.userpassword} `);
    
}
// userDetails(user)
userDetails({
    username:"pankaj",
    userpassword:"123abc"
})

const myArray = [100,200,"good-morning",true]

function accessMyArray(checkArray){
    return checkArray[2]

}
console.log(accessMyArray([100,200,"good-morning",true]))