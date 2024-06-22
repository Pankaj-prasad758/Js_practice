// Date

 let myDate = new Date()
//console.log(myDate);
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toISOString());
//console.log(myDate.toLocaleDateString());
//console.log(myDate.toLocaleTimeString());
//console.log(typeof myDate);

let newDate = new Date(2024,6,20,) // because of array month start from zero(0)
//let newDate = new Date(2024,6,20,17,30)
//console.log(newDate.toLocaleString());

let currentDate = new Date("2024-07-23") // YY-MM-DD format
     //console.log(currentDate);
     //console.log(currentDate.getTime() / 1000);
     
     
     let todayDate = new Date('07-22-2024')
     //console.log(todayDate.toLocaleString());
     //console.log(`Today Date ${todayDate.toLocaleString()}`); // string interpolation

     let myTimeStamp =  Date.now() // this gives time in mili second values
     //console.log(myTimeStamp);
     //console.log(Math.floor(Date.now()/1000));
     
     let nextDate = new Date()
     //console.log(nextDate.getFullYear());
     //console.log(nextDate.getMonth() + 1);// give value in array
     //console.log(nextDate.getDay());// start from monday to sunday 1 to 7

     nextDate.toLocaleString('default',{ // use for custom Dates as per project requirment                                 
        weekday:"long",
        month: "long"
    
     })
     console.log(nextDate);
