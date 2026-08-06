// class User{
//     constructor(username, email, password){
//         this.username=username
//         this.email=email
//         this.password=password
//     }
//     encryptpassword(){
//         return `${this.password}abc`
//     }
//     changeuser(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const tea = new User("Arjun","arjun@.com","123")

// console.log(tea.encryptpassword());
// console.log(tea.changeuser());
// console.log(tea);

//behind the scene

function User(username,email,password){
    this.username=username
    this.email=email
    this.password=password
}

User.prototype.encryptpassword = function(){
    return `${this.password}`
}

User.prototype.changeuser = function(){
    return `${this.username}`
}

const myTea =new User("myTea","'tea@.com","1234")
console.log(myTea.encryptpassword());
console.log(myTea.changeuser());



