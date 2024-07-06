//* for each loop


//* how to access an array using for each loop with normal function
 const coding = ["python","Javascript","C++","Java","Ruby"]

 coding.forEach(function(item){
    // console.log(item);
 })

 //* how to access array using for each loop with arrow function
 //* note No need to write name of function in for each loop

coding.forEach((val) =>{
    // console.log(val);
})

//* we can pass function as parameter in for each loop 

function printMe(item) {
    // console.log(item);
}

// coding.forEach(printMe)

//* we can access Index , Values and array using for each loop

coding.forEach((items,Index,arr)=>{
// console.log(items,Index,arr); 
})

//* How to access values from an object which is inside an array

const myCoding = [
    {
        languageName:"JavaScript",
        languageFileName:"Js"
    },
    {
        languageName:"Python",
        languageFileName:"Py"
    },
    {
        languageName:"Ruby",
        languageFileName:"Rb"
    }
    
]

myCoding.forEach((item)=>{
    console.log(item.languageName); 
})