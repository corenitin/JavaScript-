// var is printed out of scope that is why we are not coonsidering it.

let a = 5 // Global scope

if (true) { // Block scope 
    let a = 2
    // console.log("Inner:", a);  
}
// console.log(a);
// console.log(b);
// console.log(c);

// Nested scope 

function one() {
    const username = "nitin"

    function two() { 
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website); // here you can not access the inner scope , it means child function access parent function but parent function can not access child function
    two()
}

one()

if (true) {
    const username = "nitin"
    if (username === "nitin") {
        const website = " youtube"
        // console.log(username + website);
        // console.log(website);

    }
    // console.log(website); // not accesible bcz scope ke bahar hai
    // console.log(username);

}
// console.log(username); // not accesible bcz scope ke bahar hai


// ++++++++++++++ Interesting ++++++++++++++++

// this is normal function
// console.log(addOne(5)); // in the function you can declare before the function
 
function addOne(num) { 
    return num + 1
}
// addOne(5)


// this is Expression
console.log(addTwo(5)); // in expression you can not declare before the function because the value stored in the variale.
const addTwo = function (num) { 
    return num + 2
}
// addTwo(5)