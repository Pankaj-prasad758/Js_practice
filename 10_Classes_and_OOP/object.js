const multiple8 = function(num){
    return num*8
}
multiple8.power = 10
console.log(multiple8(8));
console.log(multiple8.power);
console.log(multiple8.prototype);

function createUser(itemName,price){
   this.itemName = itemName
   this.price = price
}

createUser.prototype.increment = function(){
    this.price++
}

createUser.prototype.printMe = function () {
    console.log(`Price is ${this.price}`);
}

const bananaShake = new createUser("banana_shake","199")
const mangoShake = new createUser("mango_shake","110")

mangoShake.printMe()