//* For loop 
      
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 6) {
        // console.log("6 is just a number ");
    }
    // console.log(element);
    
}

for (let i = 0; i <= 10; i++) {
    // console.log(`Table: ${i}`);
  for (let j = 0; j <= 10; j++) {
    // console.log(`Inner loop values: ${j} and inner loop value ${i}`);
    // console.log(i + '*' + j + ' = ' + i*j);
  }
    
}
let arrNum = [1,2,3,4,5,6,"hello"]
// console.log(arrNum.length);

let arr = ["pankaj","Shadow","alone_king","honey_badger"]
// console.log(arr.lenght); // why this code is not working

for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  // console.log(element);
}

// for (let index = 1; index <=20; index++) {
//   if (index == 5) {
//     console.log(`5 is Detected`);
//     break // to stop loop we use (break key word)
//   }
//   console.log(`value of i is index: ${index}`);
  
// }
for (let index = 1; index <=20; index++) {
  if (index == 5) {
    console.log(`5 is Detected`);
    continue
  }
  console.log(`value of i is index: ${index}`);
  
}