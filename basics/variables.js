const accountId = 123456
var accountEmail = "ishajain@google.com"
let accountPassword = "129876"
accountCity = "jaipur"

/*
prefer not to use ver
because of issue in block scope and functional scope
*/
accountEmail = "huu@byuv.com"
accountPassword = "876543"
accountCity = "modinagar"

console.table([accountEmail, accountId, accountPassword, accountCity])