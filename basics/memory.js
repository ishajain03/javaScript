// stack(primitive)  heap(non primitive)

let myYoutubeChannel = "myselfisha"
let anotherName = myYoutubeChannel

anotherName = 'chaiandcode'

console.log(myYoutubeChannel);
console.log(anotherName);

let userOne = {
    email: "ishajain@hotmail.com",
    age: 23,
    name: "isha"
}

let userTwo = userOne

userTwo.email = "ishajain@hvgut.com"

console.log(userOne);
console.log(userTwo)