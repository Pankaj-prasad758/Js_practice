// Array

const newVal = String("shadow".toLocaleUpperCase());
const Arr = [1,2,3,32,4,"pankaj",7,true,`${newVal}`,["hello",21,30],"goodbye"]
//console.log(Arr);
// console.log(Arr[8]); // index 
const Arr_2 = new Array(1,3,24,"good-morning")
// console.log(Arr_2); //written Array

//Array Methods

const newArr = [1,2,3,4,5]
//console.log(newArr);

// newArr.push(6,7,8) // add new val from end you can also add multiple val using ( , ) 
//console.log(newArr);
// newArr.pop() // pop remove val from end of an array.
//console.log(newArr);
// newArr.unshift(6)
//console.log(newArr); // add new val from the start of an Array which shift all remaining val position in array
// newArr.shift(0)     // remove first val from array
    // console.log(-newArr);

//console.log(newArr.includes(3)); // to check whether the val exist in array or not .

const secArr = newArr.join() // join basically bind the element or val of that array and convert all val into String
console.log(newArr);
console.log(secArr);
//console.log(typeof secArr);

//**Slice and Splice Method in Array

const myArr = [1,2,3,7,5]
//console.log("A",myArr);

const yourArr = myArr.slice(2,4) // start from 1 to last val(4) not count in slice method.
console.log("A",yourArr);
console.log(myArr);

const areArr = myArr.splice(1,3) // in splice method last val of range (3) is count 
console.log("B",areArr);
console.log(myArr);

const userArr = [1998,12,21,"Mukesh",true,]
const newUserArr =[...userArr]   // shallow copy in Array give copy of reference of Original array


//how to add new val to this array
newUserArr[0] = 2004;
newUserArr[2] = "Rock-N-Roll"
console.log(userArr);
console.log(newUserArr); 


