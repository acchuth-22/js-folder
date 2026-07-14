const accountId = 1224
let accountEmail = "accuth123@gmail.com"
var accountPassword = "12345"
accountCity = "Benglr"
let accountState;

// accountId = 2

/*
prefer not to use "var"
beacuse of issue in block scope and functional scope
*/


accountEmail = "ac@mail.com"
accountPassword = "121212"
accountCity = "Mysuru"
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity,accountState])
