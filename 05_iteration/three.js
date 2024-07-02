/// * for of loop
// for (const iterator of object) {
    //* iterator in like a variable & object is the arr or values you want to pass in for of loop
// }

let arr = [1,2,3,4,5,6]
for (const num of arr) {
    // console.log(num);
}

let namaste = "ram ram bhai"

for (const greet of namaste) {
    
// console.log(`Each character of ${greet}`);    
}

const map = new Map()
map.set('In', 'India') // * print only unique key and values
map.set('Fr', 'France')
map.set('USA', 'United state of America')
map.set('Is', 'Israel')
// console.log(map);

for (const [key,values] of map) {
    console.log(key ,":-" ,values);
    
}