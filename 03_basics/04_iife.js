// Immediately Invoked Function Expressions (IIFE)
// IIFE using for stoping code polluting by global scope

(function chai() { // named iife
    console.log(`DB connected`);
})(); // use semicolunm ; 

// IIFE syntax:
// ()()

// iife using arrow func
((name) => { // Unnamed iife 
    console.log(`DB connected two, ${name}`);
})('nitin')