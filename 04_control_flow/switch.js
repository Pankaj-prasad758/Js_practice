//** Switch */
//*syntax
//* switch (key) {
//     case value:
        
        // break;

//     default:
//         break;
// }
//* use to check multiple condition prefer over (if else) make code more readable four developer
const month = "march"

switch (month) {
    case "january": // *if val in other datatype like string use this "january" remember about case sensitivity
        console.log("january");
        break; //* must select break while copying code
    case "feburary":
        console.log("feburary");
        break;
    case "march":
        console.log("march");  // execute remaining code  except default
        break; 
    case "april":
        console.log("april");
        break;

    default:
        console.log("month not define"); //* if nothing execute than run this 
        break;
}

const week = 10

switch (week) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thrusday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;

    default:
        console.log("holiday");
        break;
}