const fiction_hero = ["superman",'thor',"ironman","homelander"]
const real_heros = ["Indian-Army","Doctors","Scentist","Mother & Father"]
const real_king = ["Lion","Eleplhant","Water","Sun"]

// fiction_hero.push(real_heros)
// console.log(fiction_hero);
// console.log(fiction_hero[4][0]);  // to access the val from second array

//**concat */

// const all_heros = fiction_hero.concat(real_heros,real_king) // concat written new array be simply combine two or more  array.
// console.log(all_heros); //de-merit only add two array at a time
// another way to combine two or more string


//**spread operator */

// const new_arr = [...fiction_hero,...real_heros,...real_king] // in sperad operator array become individual val means spread 
// console.log(new_arr); // can add multiple array

//**condition in which array contain array  */

const otherArray = [1,2,3,4,[3,4,5,],6,7,[8,9,[2,3,[4,6,7,["pankaj","cool"],17],4,6],6],5]
// const userArray = otherArray.flat(Infinity)
// const userArray = otherArray.flat(Infinity) // simply convert all inner array into one array 
// console.log(userArray);

// console.log(Array.isArray("pankaj")); // to check 
// console.log(Array.from("pankaj")); // from convert this string into array 
// console.log(Array.isArray(("pankaj"))); // from convert this string into array 

console.log(Array.from({name:"golden"})); // gives empty array

let score_1 = 100
let score_2 = 200
let score_3 = 300
console.log(Array.of(score_1,score_2,score_3)); //convert variables into array not just variables other values to
