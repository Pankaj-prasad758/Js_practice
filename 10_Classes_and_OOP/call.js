function setUserName(username){
this.username = username
console.log("called");
}

function createUser(username,email,password){
setUserName.call(this,username)
this.email = email
this.password = password
}

const User = new createUser("pankaj","pankaj41414@gmail.com","67683")
console.log(User);