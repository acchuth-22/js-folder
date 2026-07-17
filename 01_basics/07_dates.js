// +++++ Dates ++++

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2026, 0, 16)
// let myCreatedDate = new Date(2026, 0, 16, 5,2,56)
// let myCreatedDate = new Date("2026-07-16")
// let myCreatedDate = new Date("07-16-2026")
// console.log(myCreatedDate.toLocaleString());


let newTimeStamp = Date.now()
// console.log(newTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now()/1000);

// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);

console.log(newDate.toLocaleString('deafult', {
    weekday: "long"      //use ctrl+space to get more options(on both key and value)
}));









