const user = {
    name: "John",
    age: 30,
    greetmsg: function(){
        console.log(`${this.name}, welcome to website`); //Here "this" refers to the user object means current context
        console.log(this); //Here "this" refers to the user object means current context       
    }
}

// user.greetmsg();
// user.name = "Johnthecoder"
// user.greetmsg();
// console.log(this);

// function game(){
//     let username = "Johnthecoder"
//     console.log(this.username);
// }
// game();


// const game = function(){
//     let username = "Johnthecoder"
//     console.log(this.username);
// }
// game();


const game = () =>{    // This arrow function and arrow function does not have its own "this" keyword, it takes the "this" value from the enclosing lexical context. In this case, the enclosing context is the global scope, so "this" refers to the global object (window in browsers).
    let username = "Johnthecoder"
    console.log(this);
}
// game();

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(5, 10));

// const addTwo = (num1, num2) =>  (num1 + num2);
// console.log(addTwo(5, 10));


const addTwo = (num1, num2) =>  ({username: "Johnthecoder"}); // Here we are returning an object, so we need to wrap it in parentheses to avoid confusion with the function body.
console.log(addTwo(5, 10));