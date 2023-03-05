// this is for inner.html 
function myFunction() {
    document.getElementById("demo").innerHTML =
    "This is me working on beutifying the code by proper line breaks";
    console.log("this button has been pressed");
}

// this is to drill datatype in JS
// JavaScript has 8 Datatypes
// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object

// The Object Datatype
// The object data type can contain:

// 1. An object
// 2. An array
// 3. A date

// numbers
let length = 16;
let weight = 7.9;

// this is showing that if you use a numerical with a string, the system will treat the numerical as a string resulting in 20Volvo
let k = 20 + "Volvo";
console.log(k);

// strings
let color = "Blue";
let name = "Fred";

// booleans
let x = true;
let y = false;

// object
const person = {firstName: "Fred", lastName: "McWilliams", age: 30};

// array object
const cars = ["Ford", "Checy", "Toyota", "tesla"];

// date object
const date = new Date("2023-03-05");