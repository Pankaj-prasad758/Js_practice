//* reduce

const myNum = [1,2,3]
const totalNum = myNum.reduce(function(acc,currval){
    // console.log(`acc value ${acc} and currval value ${currval}`);
return acc + currval

},0)
// console.log(totalNum);

let userCart = [
    {
        course:"Java developer marathon",
        price:7999
    },
    {
        course:"Web Dev ",
        price:2000
    },
    {
        course:"Python",
        price:2999
    },
    {
        course:"AI ML",
        price:9999
    }

]

const userTotalAmount = userCart.reduce((acc, item) => acc + item.price , 0)
console.log(userTotalAmount);