//Singleton
// const tinderUser = new object()

const tinderUser = {}
tinderUser.Id = "123a"
tinderUser.name="Arjun"
tinderUser.IsLoggedIn=false

// console.log(tinderUser);

const regularUser = {
    email:"arjun.com",
    fullname:{
        userfullname:{
            firstname:"Arjun",
            lastname:"001"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2) 

//The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

const obj3 = {...obj1, ...obj2} // use 'spread method'
// console.log(obj3);


const user = [
    {
        id:1,
        email:"arjun.com"
    },
    {
        id:1,
        email:"arjun.com"
    },
    {
        id:1,
        email:"arjun.com"
    },
]

user[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("name"));


