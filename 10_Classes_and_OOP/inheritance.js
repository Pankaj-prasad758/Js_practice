class User{
constructor(username){
this.username = username
}
logMe(){
    return`this is username ${this.username}`
}
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }
 addCourse() {
        return`this is new course add by ${this.username}`
    }
}

const newUser = new Teacher("Karan","Karan@gmail.com","00000")
// console.log(newUser.addCourse());

const anotherUser = new User('arvind')
// console.log(anotherUser.logMe());
console.log( anotherUser instanceof Teacher);