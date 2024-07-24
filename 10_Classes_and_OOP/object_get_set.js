const User = {
    _useremail: "gohan12@gmail.com",
    _password: "pan",

    get password(){
        return this._password.toUpperCase()
    },
    
    set password(value){
        this._password = value
    }


}

const userone = Object.create(User)
console.log(userone.password);