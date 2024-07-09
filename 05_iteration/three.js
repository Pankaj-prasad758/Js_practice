/// * for of loop
// for (const iterator of object) {
    //* iterator in like a variable & object is the arr or values you want to pass in for of loop
// }

const arr = [1,2,3,4,5,6,7,]

for (const num of arr) {
    // console.log(num);
}

const greeting = "master roshi"

for (const greet of greeting) {
    // console.log(`hello ${greet}`);
}

let readSen = "friday is best fucking day"

for (const val of readSen) {
    if (val == " ") {
        // console.log("luck");
       break
    }
    console.log(val);
    }
//*Map

const map = new Map()
 map.set("In","India")
 map.set("USA","United State of America")
 map.set("Fr","France")
 map.set("Jp","Japan")
 map.set("Jp","Japan") // not print same values only print unique values
//  console.log(map);

 //* how to acces values of Map using for..of loop syntax ⬇️

 for (const  [key , values] of map) {
    // console.log(key , ':-', values);
 }

 //* how to access values of Object using for..of loop (not works)
 
 myObj = {
    'game1':'GTA',
    'game2':'Total-over-dosge',
    'game3':'Halo'
 }

//  for (const [key,value] of myObj) {
    // console.log(key,':-',value);
  //* output not work (object is not iterable by for of)
