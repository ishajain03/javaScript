const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 23.4567
// console.log(otherNumber.toPrecision(3));

const hundres = 10000000
// console.log(hundres.toLocaleString('en-IN'));



// ********************* MATHS *******************
/*
console.log(Math);
console.log(Math.abs(-4)); // changes negative to positive. positive remains same
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 9, 1));
console.log(Math.max(5,7,10,77));
*/
console.log(Math.random()); // gives value between 0 to 1.
console.log((Math.random()*10)+1); // 1 is added to control the situation on 0.something

const min = 10
const max = 20

console.log(Math.floor(Math.random() *  (max - min +1)) + min);