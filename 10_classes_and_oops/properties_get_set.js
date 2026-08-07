function User(email,password){
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        get(){
            return this._email.toUpperCase()
        },
        set (value){
            this._email=value
        }
    })

    Object.defineProperty(this, 'password', {
        get(){
            return this._password
        },
        set(value){
            this._password=value
        }

    })
}

const tea = new User("aman@.com", 12345)
console.log(tea.email);
