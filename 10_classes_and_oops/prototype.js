// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// Inheritance

const user = {
    name : "Arjun",
    email : "arjun.com"
}

const Teacher = {
    video : true
}

const teachingSupport ={
    isAvailable: false
}

const TASupport ={
    makeAssignment : "JS Assignment",
    fullTime : true,

    __proto__ : teachingSupport
}

Teacher.__proto__ = user

// modern Syntax
Object.setPrototypeOf(teachingSupport, Teacher)

let anotherUserName = "YouTube    "

Object.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
    
}

anotherUserName.trueLength()
"Arjun".trueLength()
"Aman".trueLength()
