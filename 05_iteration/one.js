//* For loop 

for (let i = 0; i <=10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
    
}

for (let i = 0; i <= 10; i++) {
    console.log(`outer loop Values : ${i}`);

   for (let p = 0; p <= 10; p++) {
    // console.log(`inner loop Values: ${p} and inner loop Values: ${i}`);
    // console.log(i + '*' + p + ' = ' + i*p);
    }
    
}

const myArray = ["james bond","homelander","shakti-man","junior-ji"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}
