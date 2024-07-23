 const user = {
    username: "pankaj@1890",
    userSignedIn: true,
    userLoginCount:4,
    userDetails: function(){
   //   console.log(`username: ${this.username}`);
     console.log(this);
    }
 }
//  console.log(this);
//  console.log(user.username);
//  console.log(user.userDetails());

function User(username,loginCount,userSignedIn){
   this.username = username;
   this.loginCount = loginCount;
   this.userSignedIn = userSignedIn;
   this.greeting = function(){
      console.log(`Welcome: ${username}`);
   }
   return this
}

const userOne = new User("falcon",31,false)
const userTwo = new User("RedFace",21,true)
// console.log(userOne);
// console.log(userTwo);
console.log(userOne.greeting());
console.log(userOne.instanceof.user);