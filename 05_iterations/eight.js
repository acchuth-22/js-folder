// reduce method

// const mynum = [1,2,3]
// const myTotal = mynum.reduce( (acc,currval) => {
//     console.log(`acc value is: ${acc}, currval is: ${currval}`);
//     return acc + currval
// }, 0 )
// console.log(myTotal);


const ShoppingCart = [
    {
        item:"Js Course",
        Price: 2999
    },
    {
        item:"py Course",
        Price: 999
    },
    {
        item:"Mobile Course",
        Price: 5999
    },
    {
        item:"DSA Course",
        Price: 12999
    }
]
const TotalPrice = ShoppingCart.reduce( (acc, item) => {
    return acc+item.Price
},0 )
console.log(TotalPrice);
