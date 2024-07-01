//** Switch */
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