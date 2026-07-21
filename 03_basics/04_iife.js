// IMMEDIATELY Invoked Function Expression (IIFE) 
//is a JavaScript function that runs as soon as it is defined. 
// It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:

(function myTab(){
    console.log(`DB Connected`);
    
})(); // The first part is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope. The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.

// if you dont pass the ; then it will give an error because the JavaScript engine will think that the function is not complete and it will try to execute the function before it is defined. So, always add a semicolon before the IIFE.

( () => {
    console.log(`DB Connected with Arrow Function`);
}
)();

// if you want to pass parameters to an IIFE, you can do so by adding them after the function definition, like this:
// (function myTab(dbName){
//     console.log(`DB Connected to ${dbName}`);
    
// })("MyDatabase"); // Here we are passing the parameter "MyDatabase" to the IIFE.  