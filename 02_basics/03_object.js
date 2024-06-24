//** Object **//

//singleton
const sym = Symbol("mySym_1")
const jsUser = {    // How we declare an object
    name:"pankaj",
    "full name": "pankaj prasad", // full name treat as string in object and you cannot access without using double quotes("")
    age: 12,
    [sym]:"mySym_1",     // right way to declare symbol in object use [ square brackets  ]
    email:"pankaj@gmail.com",
    place:"Ahmedabad",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Friday"]
}
//console.log(jsUser);
//console.log(jsUser.lastLoginDays); // how to access an oject
//console.log(jsUser["full name"]);
//console.log(jsUser.name);
//console.log(jsUser.sym);
//console.log(jsUser[sym]);

//**** how to change or over write the values in object */

jsUser.name = "bhagat singh"
//console.log(jsUser.name);


// how to lock the value in object 

// Object.freeze(jsUser)
jsUser.name = "Shamsher" // not work because of (Object.Freeze)
//console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello everyone");
}
console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`hello everyone and ${this.name}`);
}
console.log(jsUser.greetingTwo());