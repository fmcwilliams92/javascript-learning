// these are the declared variables at the beginning of my script
let firstName = "Fred";
let lastName = "McWilliams";
let age = 30;

let x = multiplyFunction(4, 3);

function multiplyFunction(a, b) {
  return a * b,
  // document.getElementById("multiplyFunction").innerHTML = "The result is" + " " + x,
  console.log(multiplyFunction);
}


// this is for inner.html 
function myFunction() {
    document.getElementById("demo").innerHTML =
    "This is me working on beutifying the code by proper line breaks";
    console.log("this button has been pressed");
}

function returnName() {
    document.getElementById("userInfo").innerHTML = firstName + " " + lastName + " " + "and I am" + " " + age + " " + "years old"
    console.log(returnName);
}
