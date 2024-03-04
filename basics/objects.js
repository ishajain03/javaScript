
const mySym = Symbol("key1")

const JsUser = {
    name: "isha",
    "full name": "isha jain",
   // mySym : "my key 1",
    [mySym] : "my key 1",
    age: 23,
    email: "ishajain@thghh.com",
    city: "hydrebad",
    IsLoggedIn: false
}

console.log(JsUser.email);
console.log(JsUser["email"]);
// console.log(JsUser.full name); // gives error
console.log(JsUser['full name']);
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);

JsUser.email = "ishajain@microsoft.com"
// Object.freeze(JsUser)
JsUser.email = "ishajain@google.com"

console.log(JsUser);

JsUser.greetings = function(){
    console.log(`hellow js user ${this["full name"]}`);
}

console.log(JsUser.greetings());