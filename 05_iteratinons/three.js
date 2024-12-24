// for of 

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {  // object means where you want to give the loop.
    // console.log(num);
    
}

const names = "nitin"

for (const name of names) {
    // console.log(`${name}`);
}

// Maps 

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'Unitd states of America')
map.set('AUS', 'Australia')
// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }

// if we have Object 

const myObject = {
    'Dell' : 'Good',
    'Hp' : 'Exellent',
    'Asus' : 'Nice'
}
// for (const obj of myObject) {
//     console.log(obj);
    
// }