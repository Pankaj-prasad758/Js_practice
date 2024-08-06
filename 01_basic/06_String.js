const firstName = "Pankaj"
const projectCount = 10

const gameName = new String("Far-Cry-latest-edition-2024")
// console.log(gameName[1]); // key value pair
// console.log(gameName.toLocaleUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(0));
// console.log(gameName.indexOf("C"));
const newGame = gameName.substring(3,3)
// console.log(newGame);

const gameTwo = gameName.slice(-5,3)
// console.log(gameTwo);
const gameThree = "    pankaj    "
const firstGame = gameThree.trim()
// console.log(firstGame);

const Url = "https://pankaj@google/www.com"
const usewUrl = Url.replace("www","ok")
// console.log(usewUrl);
console.log(gameName.search(/latest/));
console.log(gameName.split("-"));

const newUser = 21
console.log(typeof newUser);
const userTwo = newUser.toString()
console.log(typeof userTwo);
console.log(gameName.repeat(190));