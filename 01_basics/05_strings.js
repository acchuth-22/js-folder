const name = "Acchuth-"
const repoCount = 22

// console.log(name + repoCount + " Values");

console.log(`Hello i am ${name} my repo count is ${repoCount}`);

const gameName = new String('arjun-08-acchu')
console.log(gameName[0]);
// console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newString1 = "    Arjun    "
console.log(newString1);
console.log(newString1.trim());

const url = "https.//arjun.com/arjun%20acchu"        //by default the space will be replaced by %20 
console.log( url.replace('%20','-'));

console.log(url.includes('arjun'));
console.log( url.includes('suman'));

console.log(gameName.split('-'))

