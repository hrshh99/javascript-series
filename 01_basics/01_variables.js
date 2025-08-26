const accountId = 56789           // const keyword is not changeable it's immutable keyword
let accountEmail = "harsh@google.com"
var accountPassword = "12345"
accountCity = "Ahmedabad"        
let accountState;

// accountId = 2  // not allowed

accountEmail = "harsh@harsh.com"
accountPassword = "121212"
accountCity = "Surat"

console.log(accountId);


/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
