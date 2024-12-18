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
        console.log(username);
    }
    // console.log(website);
    two()
}

one()