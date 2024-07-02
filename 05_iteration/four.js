//* for in
 const myObject = {
    Js: "JavaScript",
    cpp: "c++",
    rb: "Ruby",
    swift: "Swift by Apple"

 }

 for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
  
 }