//* For loop 
 
for (let i = 0; i <= 10; i++) {
  const element = i;
  // console.log(element);
  
}

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is best number");
  }
  // console.log(element);
  
}

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is best number");
    break // to stop the loop
  }
  // console.log(element);
  
}

for (let i = 0; i <= 10; i++) {
  // console.log(`outer loop values ${i}`);
for (let p = 0; p <= 10; p++) {
// console.log(`Inner loop values ${p} outer loop ${i}`);

//* how to print a table
// console.log(i + '*' + p + '=' + i*p);
}
  
}

//* for loop on array

let myArray = ["superman","Batman","Shaktiman"]

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  // console.log(element);
  
}

//*Practice break and continue in for loop

for (let index = 0; index <= 10; index++) {
  const element = index;
  if (element == 5) {
    // console.log(`5 is best number`);
    break
  }
  // console.log(element);
  
}

for (let index = 0; index <= 10; index++) {
  const element = index;
  if (element == 5) {
    console.log(`5 is best number`);
    continue
  }
  console.log(element);
  
}