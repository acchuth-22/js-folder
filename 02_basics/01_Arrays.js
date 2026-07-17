// Arrays ************//
//Arrays will be decleared inside the [ ]. And inside the [ ] what ever is there called as Elements

const Arr1= [1,2,3,4,5,6]

const Arr2 = new Array(1,2,3,4,5,6,"Arjun")
// console.log(Arr1[1]);


//Array Methode//

// Arr1.push(7)
// Arr1.push(8)
// Arr1.pop()

// Arr1.unshift(8)
// Arr1.shift()

// console.log(Arr1.includes(3));
// console.log(Arr1.includes(13));
// console.log(Arr1.indexOf(3));

const newArr = Arr1.join()

// console.log(Arr1);
// console.log(newArr);     // typeof is string


//slice and splice//

console.log("A", Arr1);

const myn1=Arr1.slice(1, 3)
console.log(myn1);

console.log("B", Arr1);
const myn2=Arr1.splice(1, 3)
console.log(myn2);

console.log("C", Arr1);



