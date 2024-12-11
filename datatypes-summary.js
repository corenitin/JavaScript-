// Primitive Datatypes
// 7 types : Stirng, NUmber, Boolean, Null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id == anotherId);

// Non Premitive(reference) Datatype:
// Array, Objects, Functions

//Array ex
const heros = ["shaktiman", "krish", "spiderman"];

//Objects
let myObj = {
  name: "nitin",
  age: 22,
};

//Function
const myFunction = function () {
  console.log("Hello world");
};

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Nonprimitive)

let myYoutubeName = "nitinvines"
let anotherName = myYoutubeName
anotherName = "corenitin"

console.log(anotherName);
console.log(myYoutubeName); /*here what stack do that they dont change the oringinal value 
of the variable they simply copy that value and pass on the another variable.*/

let userOne ={
     Email: "yahoo@nitin.com",
     upi: "nitin@hfc",
}

let userTwo = userOne

userTwo.Email = "nitin@google.com"
console.log(userOne.Email);
console.log(userTwo.Email);

