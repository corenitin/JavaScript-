// singleton
// Object.create

// object literals

const mySymbol = Symbol("key1")
const JsUser = {
     name: "nitin",    // here name is process like a string "nitin".
     "full name": "Nitin Parmar",
     [mySymbol] : "mykey1",
     age: 22,
     location: "Bharuch",
     email: "nitin13@gmail.com",
     isLoggedIn: false,
     lastLogginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySymbol]);
// console.log(typeof JsUser[mySymbol]);

//How to change object
JsUser.email = "np@yahooo.com"
// console.log(JsUser);
// Object.freeze(JsUser) // you cant change the value bcz of Freeze.

JsUser.email = "nitin@google.com"
// console.log(JsUser);

JsUser.greeting = function(){
     console.log("Hello Js user");
}
console.log(JsUser.greeting());

JsUser.greeting2 = function(){
     console.log(`Hello Js user, I am ${this.name}. My age is ${this.age}`);
}
console.log(JsUser.greeting2());
