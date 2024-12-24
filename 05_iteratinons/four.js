// perform Object using loop

const myObject = {
    js : 'javascript',
    cpp : 'C++',
    py : 'python'
}
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

// forin for arrays
const programming = ['js', 'cpp', 'python', 'java']

for (const key in programming) {
    // console.log(`${key} : ${programming[key]}`);
    
}

// const map = new Map() ### you can not iterate on map.
// map.set('IN', 'India')
// map.set('USA', 'Unitd states of America')
// map.set('AUS', 'Australia')

// for (const key in map) {
//     console.log(key);  
// }

