// Primitive dataType

// 7 types: String, Number, Null, Boolean, Undefined, Symbol, BigInt

const outSideTemp = null
const bigNumber = 12346786543234678864n

// Reference Type(Non Primitive dataTypes)

// Array, Objects, Functions


const heros = ['Spydy', 'Ironman', 'Loki']  //Array

let myObj = {
    name : "acchuth",    //the return inside the curly bracket is "Object"
    age : 22,
}

const myFunction = function(){
    console.log("Hello world");
    
}

console.log(typeof myFunction);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// In Memory we have to types
// Stack(primitive) ,  Heap(Non-primitive)

let myName = "Acchuth"    //Stack => will give you the copy value
let anotherName = myName
anotherName = "Arjun"

console.log(myName);
console.log(anotherName);

let userOne = {                //Heap => will give you the ference value
    email:"acchu@gmail.com",
    upi:"user@ybl987654"
}

let userTwo = userOne

userTwo.email="arjun@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);





