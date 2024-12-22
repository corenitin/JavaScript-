// if

if (3 == "3") {
    // console.log("executed"); 
}

// comparison oper: <, >, <=, >=, ==, !=(not equal to), ===(check data type )

// const temparature = 41
// if (temparature === 50) {
//     console.log("less than 50");
// } else {
//     console.log("greater than 50");

// }

// example
// const score = 200
// if (score > 100) {
//     const power = "fly"
//     console.log(`User Power: ${power}`);
// }

const balance = 1000
// if(balance > 500) console.log("test"); // Implicit code 

// if (balance<500) {
//     console.log("less then 500");
// }else if (balance < 750) {
//     console.log("less then 750");
    
// }else if (balance < 900) {
//     console.log("less then 900");
    
// }else{
//     console.log("less then 1200");
    
// }

const userLoggedIN = true
const debitCrad = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIN && debitCrad) { // &&=and 
    console.log(`allow for buy course`);
    
}
if (loggedInFromGoogle || loggedInFromEmail) { // ||=or
    console.log(`User logged in`);
    
}
