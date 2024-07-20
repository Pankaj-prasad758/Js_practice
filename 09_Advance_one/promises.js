const promiseOne = new Promise(function(resolve, reject){
//do an async task
//DB calls, crytography, network
setTimeout(function(){
    // console.log('Async task is completed');
    resolve()
},1000)
})
promiseOne.then(function(){
    // console.log('Promised consumed');
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        // console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    // console.log("Resolved 2 consumed");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name:"pankaj prasad",email:"pankajprasad4545@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
// console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
setTimeout(function(){
    let error = false
    if (!error) {
        resolve({username:"Choco_fill", password:"only_10_rupee"})
    }
    else{
        reject("ERROR: Something went wrong")
    }
},1000)
})

promiseFour
.then((user) => {
console.log(user);
return user.username
})
.then((username)=>{
console.log(username);
})
.catch((error) => {
console.log("ERROR");
})
.finally((username)=>{
    console.log("either promise is resolve or reject");
})

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username:"JavaScript", password:"I Can"})
        }
        else{
            reject("ERROR: Js went wrong")
        }
    },1000)
})

async function consumedPromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumedPromiseFive()

async function getAllusers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            console.log(data);
    } catch (error) {
        console.log("E:",error);
    }
}
// getAllusers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()

})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
console.log(error);
})