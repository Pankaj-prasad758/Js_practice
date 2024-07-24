const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor);

const User = {
    username:"panakj",
    useremail: "pankaj4544@gmail.com",
    userpassword:"09078879",
    printMe: function(){
        console.log('check this out');
    }
}

// const newUser = Object.getOwnPropertyDescriptors(User,"username","useremail,userpassword")
// console.log(newUser);
 Object.defineProperty(User,"username",{
    writable: true,
    enumerable: true,
    configurable: false
})
 
console.log(Object.getOwnPropertyDescriptor(User,"username",));

for (let [key, value] of Object.entries(User)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}