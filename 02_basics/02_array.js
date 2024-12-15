const marvel_heros = ["thor", "ironman", "hulk", "captainamerica"]
const dc_heros  = ["batman", "superman", "flash"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[4][1]);

// const myheros = marvel_heros.concat(dc_heros)
// console.log(myheros);

const newheros = [...marvel_heros, ...dc_heros]
// console.log(newheros);

const array = [1, 2, 3,[4, 5, 6,],7, [8,9, [10, 11]]]
const another_array = array.flat(Infinity)
// console.log(another_array);

// console.log(Array.isArray("nitin"));
// console.log(Array.from("nitin"));
// console.log(Array.from({name :"nitin"})); //Interesting 

let scr1 = 10
let scr2 = 20
let scr3 = 30
console.log(Array.of(scr1,scr2,scr3));







  