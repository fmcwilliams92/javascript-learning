// declaring variables at the beginning of your script
// let carType = "Ford";

// declaring multiple variables in one line
let carType = "Ford", carName = "F150", price = 5000;
console.log(carType, carName, price);

function myCar() {
    document.getElementById("carType").innerHTML = carType;
    document.getElementById("carName").innerHTML = carName;
    document.getElementById("price").innerHTML = price;
}

// general rule, always use const, these variables cannot change
const productOne = 6;
const productTwo = 4;

// the let variable lets the value be the result of the expression, in this case addition
let total = productOne + productTwo;
console.log(total);

// this is for testing variables
var x = 6;
var y = 4;

// this variable assigns b to the value of the expression
var b = x - y;
console.log(b);

// this is a let variable
let t = 67;
let s = 12;

let c = t - s;
console.log(c);

// these are undeclared variables
h = 10;
k = 5;
p = h * k;
console.log(p);

// this is for inner.html 
function myFunction() {
    document.getElementById("demo").innerHTML =
    "This is me working on beutifying the code by proper line breaks";
    console.log("this button has been pressed");
}