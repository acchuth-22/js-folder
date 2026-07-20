// var c =500
if (true){
    let a = 200
    const b = 400
    // var c = 600
    // console.log("INNER:", a);
    
}
// console.log(c);

function one(){
        const user = "John"

        function two(){
            const website = "www.google.com"
            console.log(website);
        }
        // console.log(website);
        // two();
}
// one()

if (true){
    const username= "Johnthecoder"
    if (username === "Johnthecoder"){
        const website = " www.google.com"
        // console.log(username+website);
    }
    // console.log(website);
    
}
// console.log(username);


// +++++++++ interesting example ++++++++++++++++
addone(5)
function addone(num){
    return num + 1;
}
// addone(5)



addtwo(5)
const addtwo = function(num){
    return num + 2;
}
// addtwo(5)
//+++++++++++++++++++++++++++++++++++++++++++++++