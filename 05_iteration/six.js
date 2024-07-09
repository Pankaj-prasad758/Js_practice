
const coding = ["python","Javascript","C++","Java","Ruby"]

const values = coding.forEach((item) =>{
    // console.log(item);
    return item
})
// console.log(values); // output undefine
  
//* how to access an array using filter method

const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNum = coding.forEach((item)=>{
//     console.log(item);
// })
// console.log(newNum);//* for each loop cannot return values

// const testingNUm = myNum.filter((num)=>(num >= 5))
// console.log(testingNUm);

let otherNum = []

myNum.forEach((item)=>{
    if (item >= 0 ) {
        otherNum.push(item)
    }

})
console.log(otherNum);






// const otherNum  = []

myNum.forEach((items)=>{
    if (items > 5) {
        // otherNum.push(items)
    }
   
})
// console.log(otherNum);


const myBookCollection = [
    {
        bookName:"book one",
        genre:"history",
        Publish: 1996,
        Edition:2003
    },
    {
        bookName:"book two",
        genre:"Science",
        Publish: 2002,
        Edition:2012
    }
    ,
    {
        bookName:"book three",
        genre:"fiction",
        Publish: 2011,
        Edition:2018
    },
    {
        bookName:"book four",
        genre:"non fiction",
        Publish: 2018,
        Edition:2023
    },
    {
        bookName:"book five",
        genre:"fiction",
        Publish: 2015,
        Edition:2022
    },
    {
        bookName:"book six",
        genre:"history",
        Publish: 2019,
        Edition:2021
    },
    {
        bookName:"book seven",
        genre:"non fiction",
        Publish: 2005,
        Edition:2016
    },
    {
        bookName:"book eight",
        genre:"history",
        Publish: 2009,
        Edition:2015
    }

]


// let myFavBook = myBookCollection.filter((bk)=> bk.Edition >= 2020)
//  myFavBook = myBookCollection.filter((bk)=> bk.Edition >= 2020 && bk.genre === "non fiction")
 myFavBook = myBookCollection.filter((bk)=> { return bk.genre === "history" && bk.Publish >= 2000 })
// console.log(myFavBook); 

// let myBook = myBookCollection.filter((bk)=>bk.genre === "non fiction")
let myBook = myBookCollection.filter((bk)=>bk.genre === "non fiction" && bk.Edition >= 2007)
console.log(myBook);