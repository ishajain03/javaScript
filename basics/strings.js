const name = "isha"
const reppoCount = 60

// no need to use the given method for concatination
// console.log(name + reppoCount + 'value');

console.log(`hello my name is ${name} and my repop count is ${reppoCount}`);

const gameName = new String('isha')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,2)  // negative value don't work with substring
console.log(newString);

const anotehrString = gameName.slice(1,3)
console.log(anotehrString);


const newStringOne = "   isha    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh20%choudhary"
console.log(url.replace('20%', "-"));


console.log(url.includes("hello"))
console.log(gameName.split('h'));

