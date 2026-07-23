const coding = ['js','py', 'java', 'cpp', 'rb']

// coding.forEach( function (val) {
//     console.log(val);
    
// } )

// coding.forEach( (item) => {
//     console.log(item);
    
// } )

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
    
// } )

const myCoding = [
    {
        langName : "JavaScript",
        lanFile : "js"
    },
    {
        langName : "Java",
        lanFile : "java"
    },
    {
        langName : "Python",
        lanFile : "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.langName);
    
} )