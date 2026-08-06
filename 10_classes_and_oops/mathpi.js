// const mathPI=Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(mathPI);

const Tea = {
    name: 'MasalaTea',
    price: 50,
    isAvailable : true,

    orderPlaced : function(){
        console.log(`Did u get the hole function or not`);
        
    }
}
console.log(Object.getOwnPropertyDescriptor(Tea, 'name'));

// Object.defineProperty(Tea, 'name',{
//     writable : false,
//     enumerable : false
// })
// console.log(Object.getOwnPropertyDescriptor(Tea, 'name'));

// Tea.name="Arjun"
// console.log(Tea);


for (const [key, value] of Object.entries(Tea)) {
    if(typeof value!== 'function'){
        console.log(`${key}:${value}`);
        
    }
    
}
