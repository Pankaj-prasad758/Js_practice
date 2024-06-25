/// *** Object

// singleton object
 const instaUser = new Object()
//  console.log(instaUser); 

//  giving data to instaUser object
instaUser.id ="123ggg"
instaUser.name = "karl"
instaUser.isLoggedIn = false


// console.log(instaUser);
 // noo singleton object
 
 const instaUser_2 ={}
 //  console.log(instaUser_2);
 
 const newUser = {
    email: "pankaj909090@gmail.com",
    fullname: {
        userFullName: {
            firstName:"Pankaj",
            lastName:"King"
        }
    }

 }
//  console.log(newUser.fullname.userFullName.firstName);

const obj_1 = {1:"a", 2:"b"}
const obj_2 = {3:"c", 4:"d"}
const obj_3 = {6:"e", 5:"f"}

const obj_4 = Object.assign({},obj_1,obj_2,obj_3) // how to combine or add objects
// console.log(obj_4);

//another way
const newObj = {...obj_1,...obj_2,...obj_3}
// console.log(newObj);

// const obj_5 = Object.assign(obj_1,obj_2,obj_3)
// console.log(obj_5);

const User = [
    {key:1,
    email:"karl@gmail.com",
    },
    {
        key:2,
    email:"James@gmail.com",
    },
    {key:3,
        email:"YoYo@gmail.com",},
]

// console.log(User[1]);
User[0].email // to access User data

console.log(Object.keys(instaUser));
console.log(Object.values(instaUser)); 
console.log(Object.values(instaUser)); // to access object data output in Array form
console.log(Object.entries(instaUser)); // gives val in array syntax [[key:value],[key:value]] array in other array
console.log(instaUser.hasOwnProperty("123ggg")); // works on key of object // ==> to check whether the val present in object or not 