// ** Scopes

if (true) {
    let first_val = 12
    const second_val = 20
    var thrid_val = 30
    // console.log(first_val);
    // console.log(second_val);
}

// console.log(thrid_val);
function one(){
    const username = "pankaj"
    
    function two(){
        const website = "google.com"
        console.log(username);
        
    }
    //  console.log(website);
    two()
}
one()

if(true){
    const username = "rocky"
    if(username === "rocky"){
      const websiteName = " DBM.com"
      console.log(username + websiteName);
    }
  
    // console.log(websiteName);
}
// console.log(username);


console.log(addOne(5));
function addOne(num){
    return num +1
}

const addTwo = function(num){
    return num +1
}
console.log(addTwo(2)); // throw error