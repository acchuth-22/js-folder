function sayMyName(){
    console.log("A");
    console.log("R");
    console.log("J");
    console.log("U");
    console.log("N");
}

// sayMyName()

// function addTwoNumbers(number1,number2){   //Here the number1 and number2 are the "Parameters"
//     console.log(number1 + number2);
    
// }

// addTwoNumbers(3, "4")
// addTwoNumbers(3, null)
// addTwoNumbers(3, 4)              //Here the number1 and number2 are the "Arrguments"

// const result = addTwoNumbers(3,5)
// console.log("Result:", result);


// function addTwoNumbers(number1,number2){   //Here the number1 and number2 are the "Parameters"
//     // let result = number1 + number2;
//     // return result
//     return number1 + number2
// }
// const result=addTwoNumbers(2,4)
// console.log("Result:", result);

// function loginUsermsg(username){
//     if(username === undefined){         // or we can use "!usename"
//         console.log("pls enter a name:");
//         return
//     }
//     return `${username} is logged in`
// }
// console.log(loginUsermsg("Arjun"))
// console.log(loginUsermsg())

function CalculatorCartPrice(val1, val2, ...num1){      //Here "...num1" is called as "rest" operator
    return num1                             // There is a diff btw "spread" & "Rest" operator no throw thw "mdn" notes
}
// console.log(CalculatorCartPrice(2, 4, 6, 8));

const user = {
    username:"arjun",
    id:1234
}

function handleObject(anyObject){
    // console.log(`User name is ${anyObject.username} and id is ${anyObject.id}`);
    
}
// handleObject(user)
handleObject({
    username:"sam",
    id:456
})

const myNewArray = [200,300,400,500]

function returnSecondValue(getArray){
    return getArray[2]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,400,500]));


