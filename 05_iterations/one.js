//for

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
    
// }

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (element==5) {
//         console.log("5 is better");
//     }
//     console.log(element);
    
// }

for (let i = 0; i <= 10; i++) {
    // const element = i;
    // console.log(`Outter loop ${i}`);
    for (let j = 0; j <= 10; j++) {
        // const element = j;
        // console.log(`Inner loop ${j} and inner loop ${i}`);
        // console.log(i + " * " + j + " = " + i*j);
        
    }
    // console.log(`Outter loop ${i}`);
    
}

let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// for (let i = 1; i <= 20; i++) {
//     if (i == 5){
//         console.log(`5 Detected`);
//         break;
//     }
//     console.log(`Value of i is ${i}`);  
// }

for (let i = 1; i <= 20; i++) {
    if (i == 5){
        console.log(`5 Detected`);
        continue;
    }
    console.log(`Value of i is ${i}`);  
}