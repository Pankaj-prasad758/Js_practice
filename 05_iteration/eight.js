//* reduce

const myNum = [1,2,3,4]

const newVal = myNum.reduce((acc,currval)=>{
    console.log(`acc ${acc} and currval ${currval}`);
    return acc + currval
},0 )
console.log(newVal);




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

const totalAmount = userCart.reduce((acc, item) => acc + item.price , 0 ) 
console.log(totalAmount);