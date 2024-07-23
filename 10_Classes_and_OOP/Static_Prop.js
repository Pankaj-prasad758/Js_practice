class User{
    constructor(username,password){
        this.username = username
        this.password = password
    }
    
    generateID(){
        for (let i = 0; i <=  10; i++) {
       
           return  i = Math.floor(Math.random() * 100 + 1)
        }
    }

  static randomID(){
        return`random ID ${this.generateID()} of ${this.username} `
    }
}

const person = new User("hulk","super_hulk")
console.log(person.randomID());