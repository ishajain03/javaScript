let score = 33

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber)

/*
"33" => 33
"33abc" => NAN (not a number)
boolean true => 1 and boolean false => 0
*/

let isLoggedIn = undefined
let booleanIsLOggedIn = Boolean(isLoggedIn)
console.log(booleanIsLOggedIn);

// 1=> true , 0 => false
// "" => false
// "isha" => true
// null => false
// undefined => false

let someNumber = null
let stringNumber = String(someNumber)
//console.log(stringNumber);
//console.log(typeof stringNumber);

/*
33 => string
"33" => string
abc33 => error
"abc33" => string
null => string
undefined => string
*/