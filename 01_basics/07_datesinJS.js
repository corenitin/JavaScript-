// Dates 
 let myDate = new Date()
//  console.log(myDate.toDateString());
//  console.log(myDate.toISOString());
//  console.log(myDate.toLocaleDateString());
//  console.log(myDate.toString());
//  console.log(typeof myDate);

// let myCreatedDate = new Date(2024,11,15)
let myCreatedDate = new Date("2024-12-15")
// console.log(myCreatedDate.toLocaleString());


// let myTimestamp = Date.now()
// console.log(myTimestamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000))

let newDate =  new Date()
console.log(newDate.getSeconds);

newDate.toLocaleString('default',{
     weekday: "long",
     day: "numeric",
     timeZone: ""
})




 