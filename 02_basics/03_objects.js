
//object literals

const mySym = "keys1"

const JSuser = {
    name:"Arjun",
    [mySym]:"keys123",   // NOTE on this line
    age:18,
    email:"arjun.com",
    location:"Banglr"
}

// console.log(JSuser.email);
// console.log(JSuser["name"]);  // NOTE on this line
// console.log(JSuser[mySym]);   // NOTE on this line

// console.log(JSuser.email="arjunAcchu.com")   // Changes can be done using "="

// Object.freeze(JSuser)              // when you uses the freeze method before changing the value then the value remains same means doesn't changed 
// console.log(JSuser.email="arjunAcchu0308.com")  //Example line:-> change the email after the freeze method
// console.log(JSuser);


// Funstions  //
JSuser.greeting = function(){
    console.log("Hello JS user");
}


JSuser.greeting1 = function(){
    console.log(`Hello ${this.name} JS user `);
}

console.log(JSuser.greeting());    //NOTE:-> In the above 21st line we use freeze method so you have to comment it out orelse it wont exicute
console.log(JSuser.greeting1());

