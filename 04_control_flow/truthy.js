// const userEmail = "user@example.com";
// if(userEmail) {
//     console.log("User email is truthy");
// } else {
//     console.log("User email is falsy");
// }

// const userEmail = "";
// if(userEmail) {
//     console.log("User email is truthy");
// } else {
//     console.log("User email is falsy");
// }

// const userEmail = [];
// if(userEmail) {
//     console.log("User email is truthy");
// } else {
//     console.log("User email is falsy");
// }

//falsy value
// false, 0, -0, bigint 0n, "", null, undefined, NaN

//truthy value
// true, 1, -1, "0", "false", [], {}, function(){}, new Date(), Infinity, -Infinity

const array = []
if (array.length === 0) {
    console.log("Empty array");
}

const emptyObject = {}
if (Object.keys(emptyObject).length === 0) {
    console.log("Empty object");
}


//Nullish coalescing operator (??) is used to provide a default value when the left-hand side is null or undefined.
// val1 = 5 ?? 10; // val1 will be 5 because it's not null or undefined
// val2 = null ?? 10; // val2 will be 10 because the left-hand side is null
// val3 = undefined ?? 10; // val3 will be 10 because the left-hand side is undefined
// val4 = null ?? 10 ?? 20; // val4 will be 10 because the left-hand side is null

// console.log(val1); // Output: 5
// console.log(val2); // Output: 10
// console.log(val3); // Output: 10
// console.log(val4); // Output: 10

//Ternary operator is a shorthand for an if-else statement. It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false.
const iceTeaPrice= 100
iceTeaPrice <=80 ? console.log("Ice Tea Price is less than or equal to 80") : console.log("Ice Tea Price is greater than 80")