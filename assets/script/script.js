// this is for inner.html 
function myFunction() {
    document.getElementById("demo").innerHTML =
    "This is me working on beutifying the code by proper line breaks";
    console.log("this button has been pressed");
}

// this is a let statement and better understanding how the console log works and where to insert it
// let lastName, lastname;
// lastName = "john";
// lastname = "google";
// console.log(lastName, lastname);

let firstName = "Fred";
let lastName = "McWilliams";
let age = 30;

let text = firstName + " " + lastName + " " + "and I am" + " " + age + " " + "years old";
window.alert(text);
console.log(text)