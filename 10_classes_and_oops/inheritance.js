class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`UserName is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.username=username
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`New coruse was added by ${this.username}`);
        
    }
}

const tea=new User("arjun")
tea.logMe()

const masalaTea= new Teacher("Aman","aman@.com", "123")
masalaTea.addCourse()

console.log(tea === masalaTea);

console.log(masalaTea instanceof User);
console.log(tea instanceof Teacher);

