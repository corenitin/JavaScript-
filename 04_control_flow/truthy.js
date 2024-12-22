const userEmail = [] // here we are assuming that some particular value are exist
// its is called truthy value 

if (userEmail) {
    console.log("Got user email");
    
} else{
    console.log("Dont have user email");
    
}

// falsy value
// false, 0, -0, BigInt, 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
    
// }

const empty = {}

if (Object.keys(empty).length === 0) {
    console.log("Object is empty");
    
}

// Nullish Coalesching Operator(??): null, undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 10

// console.log(val1);

// Terniary Operator 

// condition ? true: false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80 ") : console.log(" more than 80");


