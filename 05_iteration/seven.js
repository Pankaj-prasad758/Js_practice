const myNum = [1,2,3,4,5,6,7,8,9,10]
 
// const newNum = myNum.map((num) => num + 10 )
// console.log(newNum);
 


//* how to access or change values of array using for each loop


// const otherNum = []

//   myNum.forEach((num)=>{
//     otherNum.push(num + 20)
//  })
//  console.log(otherNum);

//*Chaining in Js ex :- .map().map.filter()

const oneNum = myNum
               .map((num)=> num * 10)
               .map((num)=> num + 1)
               .filter((num)=> num >= 50)
            //    console.log(oneNum);
