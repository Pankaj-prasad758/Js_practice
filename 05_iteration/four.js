//* how to acces Object using For in loop

const myObject = {
   Js:"JavaScript",
   Rb:"Ruby",
   cpp:"C++",
   swift:"swift by Apple"
}

for (const key in myObject) {
//   console.log(`${key} Shortcut for ${myObject[key]}`); //* output gives us key and values of an object
}

//* how to access an Array using for..in loop 

myArray = ["JavaScript","Java","Python","Swift","Ruby","C++"]

for (const key in myArray) {
// console.log(key); //* output of key in array start from 0.
// console.log(`${key} and languages are ${myArray[key]}`); //*how to access values of an Array in for in
}

//* Note you cannot access map using for in loop


const map = new Map()
 map.set("In","India")
 map.set("USA","United State of America")
 map.set("Fr","France")
 map.set("Jp","Japan")
 map.set("Jp","Japan")

 for (const key in map) {
  console.log(key); //*Output you cannot iterate values of map using for in loop.
 }
