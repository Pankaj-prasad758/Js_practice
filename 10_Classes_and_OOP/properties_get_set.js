function User(username,email){
    this._username = username;
    this._email = email

    Object.defineProperty(this,'email',{
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
             this.email = value
        }
    })
}

const newUser = new User("goku","goku@dragonball.com")
console.log(newUser.email);