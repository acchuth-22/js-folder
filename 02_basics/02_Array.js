const marvel_heros =["Spydy","ironman", "Thor"]
const dc_heros = ["Superman","Batman", "Flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// console.log(marvel_heros.join(dc_heros));

// marvel_heros.concat(dc_heros)
// console.log(marvel_heros);

const all_heros=marvel_heros.concat(dc_heros)    //concat is for 2 value that is limited
// console.log(all_heros);

//    Spread    //

const all_heros1 = [...marvel_heros, ...dc_heros]         // it is not limited and can also add more value if you need any futher addtion
console.log(all_heros1);                    

const another_array = [1,2,3,[4,5],6,[7,8,3,[4,6,8]]]
const another_array1 = another_array.flat(Infinity)    //Flat:-> it will give you in one array
// console.log(another_array);
console.log(another_array1);

console.log(Array.isArray("Arjun"));
console.log(Array.from("Arjun"));
console.log(Array.from({name:"Arjun"}));   //NOTE: Interesting

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score2));
console.log(marvel_heros);

