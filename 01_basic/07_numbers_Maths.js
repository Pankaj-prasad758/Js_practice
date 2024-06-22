const score =  100
//console.log(score);

const newScore = new Number(1000)
//console.log(newScore);
//console.log(newScore);

const currentScore = new Number(300)

//console.log(currentScore.toString())
//console.log(currentScore.toString().length);
//console.log(typeof currentScore);
//console.log(currentScore.toFixed(3));

// const otherNumber = 29.89878
const otherNumber = 45.565785
//console.log(otherNumber.toFixed(3));
//console.log(otherNumber.toFixed(2));

const newNumber = 1123.8775677
//console.log(newNumber.toPrecision(4)) //  for precise values

const indianValues = 1000000
//console.log(indianValues.toLocaleString()); // to count big numbers ,this makes it easy to count 
//console.log(indianValues.toLocaleString('en-In'));
//console.log(indianValues.toLocaleString('en-IN'));

//////////       ************************************** Maths ************* ****************************************************    
const newValue = -898
//console.log(Math.abs(newValue));
//console.log(Math.abs(-18));  // convert neg to positive val
//console.log(Math.ceil(16.1)); // gives hight val
//console.log(Math.round(20.7));  // gives val as per exponential notation
//console.log(Math.floor(23.7));  // gives low val
//console.log(Math.max(23,8,98,198,1000)); // check the lowest val
//console.log(Math.min(22,32,12,));
//console.log(Math.max(22,32,12,));

//****************************************** Maths random**************************/ 
console.log(Math.floor(Math.random()*10) + 1 );

//onsole.log(Math.min(23,8,98,198,1000)); // check the highest val
//console.log(Math.random()); // give val between 0 to 1 ex 0.2 to 0.9
//console.log((Math.random()*10) + 1); // to get the value in 1 digit
//console.log((Math.floor(Math.random()*10) + 1)) // which gives us complete value like 4 or 6 between 1 to 10

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1) + min ));
 //console.log(Math.floor(Math.random() * (max - min + 1)) + min) // to get the value between 10 to 20 formula
 //console.log(Math.floor(Math.random() * (max - min + 1) + min));
