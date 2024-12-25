// foreach

const coding = ['js', "pyhton", "c", "java"]

// coding.forEach(function (item) { // forEach is callbackfn that is why func has no name.
//     console.log(item);

// }) 

// coding.forEach((item) => { // Arrow function
//     console.log(item);
// });

// function printMe(item) {
//     console.log(item);

// }
// coding.forEach(printMe); 

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);

// })

const myCoding = [
    {
        name: 'js',
        type: 'front-end'
    },
    {
        name: 'python',
        type: 'back-end'
    },
    {
        name: 'c',
        type: 'system'
    },
    {
        name: 'java',
        type: 'back-end'
    }
]

myCoding.forEach((item) => {
    console.log(`${item.name} : ${item.type}`);

})