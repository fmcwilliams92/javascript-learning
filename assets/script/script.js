// Variables defined with let cannot be Redeclared.
// Variables defined with let must be Declared before use.
// Variables defined with let have Block Scope.
// declaring multiple variables in one line
let carType = "Ford", carName = "F150", price = 5000;

function myCar() {
    document.getElementById("carType").innerHTML = carType;
    document.getElementById("carName").innerHTML = carName;
    document.getElementById("price").innerHTML = price;
    console.log(carType, carName, price);
}

// Variables defined with const cannot be Redeclared.
// Variables defined with const cannot be Reassigned.
// Variables defined with const have Block Scope.
const cars = {type:"Tesla", model:"Y", year:2023, color:"White"}
console.log(cars);

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