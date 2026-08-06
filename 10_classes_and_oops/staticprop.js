class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`UserName is ${this.username}`);
        
    }

    static createId(){
        return `123`
    }
}
const myUser = new User("arjun")
// myUser.logMe()

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.username=username
        this.email=email
    }
}

const Iphone = new Teacher("Aman","aman@.com")
console.log(Iphone.createId());