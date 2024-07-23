let justHero = ["flash","batman"]

let heropower = {
    flash:"extremely fast",
    batman:"I am rich"
}

Object.prototype.Gotham = function(){
    console.log('this is my city batman');
}
Array.prototype.Dc = function(){
    console.log(`hey i am flash`);
}
// justHero.Dc()

//inheritance

const User = {
    username:"WALTER",
    email:"walter@google.com"

}

const Teacher = {
    lectureRecord : true
}
const teacherSupport = {
    isAvialabel: false
}
const TASupport = {
    fullTime:true,
    makeAssignment: 'JS Assignment',
    __proto__:teacherSupport,
}
// console.log(TASupport.__proto__);

Teacher.__proto__ = User
// console.log(Teacher.__proto__);

//Modern Syntax

Object.setPrototypeOf(TASupport,User)
// console.log(TASupport);

let Username = "Still lot to learn     ";
let fishing = "this river is full of fish     "

String.prototype.truelenght = function(){
    console.log(this);
    // console.log(this.name);
    console.log(`true lenght is ${this.trim().length}`);
}

// Username.truelenght()
// fishing.truelenght()
// "pankaj   ".truelenght()