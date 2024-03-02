const dc_heros = ["superman", "flash", "batman"]
const marvel_heros = ["captain america", "iron man", "vision"]
// marvel_heros.push(dc_heros)
 console.log(marvel_heros);

 const allHeros = marvel_heros.concat(dc_heros)
 console.log(allHeros);

 // SPREAD OPERATOR 

 const all_new_heros = [...marvel_heros, ...dc_heros]
 console.log(all_new_heros);


 const anotherArray = [1,2,3,[4,5,6],7,[6,7,[3,4,5,6]]]

 const realAnotherArray = anotherArray.flat(Infinity)

 console.log(realAnotherArray);


console.log(Array.isArray('isha'));
console.log(Array.from("isha"));
console.log(Array.from({name: "isha"})); // interesting case
