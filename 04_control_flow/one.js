//if 
// const temp = 32
// if (temp < 40) {
//     console.log("It's quite cold!");
// }
// else{
//     console.log("It's not that cold.");
// }


// const score = 200
// if(score > 100){
//     var power = "super";   // Be aware of using var in if statements, it can lead to unexpected behavior due to its function scope.
//     console.log(`You have ${power} powers!`);
    
// }
// console.log(`You have ${power} powers!`);

const balance = 1000
// if (balance > 500) console.log("Executed");

// if (balance < 500) {
//     console.log("Balance is less than 500");
// }else if (balance < 750) {
//     console.log("Balance is less than 750");
// }else if (balance < 900) {
//     console.log("Balance is less than 900");
// }else {
//     console.log("Balance is more than 1000");
// }


const userLoggedIn = true
const debitCard = true
const loggedInWithGoogle = false
const loggedInWithemail = true

if (userLoggedIn && debitCard) {   // && is a logical operator that checks if both conditions are true
    console.log("You can make a purchase");
}

if (loggedInWithGoogle || loggedInWithemail) {   // || is a logical operator that checks if at least one condition is true
    console.log("You are logged in!");
}