const buttons = document.querySelectorAll(".button")
// console.log(buttons);
const body = document.querySelector("body")

buttons.forEach((button)=>{
//  console.log(button);
button.addEventListener("click",function(e){
console.log(e);
console.log(e.target);
switch (e.target.id ) {
    case "red":
        body.style.backgroundColor = e.target.id
        body.style.transition = '1s'
        break;
    }
switch (e.target.id ) {
    case "green":
        body.style.backgroundColor = e.target.id
        break;
    }
switch (e.target.id ) {
    case "blue":
        body.style.backgroundColor = e.target.id
        break;
}
switch (e.target.id ) {
    case "yellow":
        body.style.backgroundColor = e.target.id
        break;
}
switch (e.target.id ) {
    case "coral":
        body.style.backgroundColor = e.target.id
             body.style.transition = '1s'
        break;
}
})
})