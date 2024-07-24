class User{
    constructor(email,password){
this.email = email
this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
     
    set email(value){
         this._email = value
    }
    get password(){
         return `${ this._password}xgdhj3738@`
    }

    set password(value){
     this._password = value
    }
}

const pankaj = new User("panakj747@gmail.com","fire")
console.log(pankaj.email);