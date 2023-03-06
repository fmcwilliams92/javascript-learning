// these are the declared variables at the beginning of my script
let firstName = "Fred";
let lastName = "McWilliams";
let age = 30;

{
  let a = 10
  let b = 5
  let c = a * b;
  console.log(c);

  function multiplyFunction(a, b) {
    return a * b,
    document.getElementById("functionTest").innerHTML = c,
    console.log(multiplyFunction);
  }
}

// this is an object
// additionally, the values tied to the names in javascript are referred to as properties
{
  const person = {
    firstName: "Fred",
    lastName: "McWilliams",
    age: 30,
    hairColor: "Blonde"
  }
  function personInfo() {
    document.getElementById("personInfo").innerHTML = "Hi, my name is" + " " + firstName + " " + lastName + " " + "and I am" + " " + age + " " + "years old";
  }
  console.log(person);
};

// call the function to populate the data
personInfo();

// this is for inner.html 
function myFunction() {
    document.getElementById("demo").innerHTML =
    "This is me working on beutifying the code by proper line breaks";
    console.log("this button has been pressed");
}

function returnName() {
    document.getElementById("userInfo").innerHTML = firstName + " " + lastName + " " + "and I am" + " " + age + " " + "years old"
    console.log(userInfo);
}
