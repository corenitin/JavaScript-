const user = {
    username: "nitin",
    price: 899,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to the website`);
        // this. current context(mtlb kiske bare me bat ho rhi hai) reffer
        // console.log(this);

    }
}
// user.welcomeMessage()
// user.username = "krinal"
// user.welcomeMessage()

// console.log(this); // Bcz we are in node env that is why the context is {} empty.

// function chai() {
//     let username = "nitin" 
//     console.log(this.username);
//     // context only work in Objects not in functions.
// }
// chai()

//* More ways to declare function through arrow */

// const chai = function () {
//     let username = "nitin"
//     console.log(this.username);
// }
// chai()

const chai =  () => {
    let username = "nitin"
    console.log(this);
}
// chai()

// Arrow function syntax 
() => {}

// Basic arrow func
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(2, 3));


// Impelicit return ( sort of defining arrow func)
//  const addTwo = (num1, num2) => num1 + num2
//  const addTwo = (num1, num2) => (num1 + num2) // when you use {} braces then return keyword is compullasary.

const addTwo = (num1, num2) => ({username: "nitin"}) // Object return
console.log(addTwo());