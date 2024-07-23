//ES6

// class User{
// constructor(username,email,password){
// this.username = username;
// this.email = email;
// this.password = password;
// }

// encryptedPassword(){
//     return`${this.password}abc`
// }
// changeUserName(){
//     return`${this.username.toUpperCase()}`
// }

// }

// const userDetials = new User("mohan_bharwag","mohan@charanpur.com","876787")
// console.log(userDetials.encryptedPassword());
// console.log(userDetials.changeUserName());


function User(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptedPasswrod = function(){
    return`${this.password}buddy`
}
User.prototype.changeUserName = function(){
    return`${this.username.toUpperCase()}`
}

const newUser = new User("Ganesh","good@gmail.com","5566")
console.log(newUser.encryptedPasswrod());
console.log(newUser.changeUserName());