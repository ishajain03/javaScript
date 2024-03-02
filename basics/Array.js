// arrays

const myArr = [0,1,2,3,4,5,6,7,8,9]
const myHeros = ["iron men", "captain america"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);

// ARRAY METHODS
/*
    myArr.push(6)
    myArr.push(7)
    //myArr.pop()
    
    myArr.unshift(9)
    myArr.shift()
    console.log(myArr);
     */
    const newArr = myArr.join() // coverts array into string format
    //  console.log(newArr);

    //  console.log(myArr.includes(7));
    //  console.log(myArr.indexOf(6));

    // SLICE, SPLICE


    // difference between slice and splice is  slice dont manipulate original array
    // where as splice manipulates the original data or array.
    console.log("A", myArr);

    const myn1 = myArr.slice(1,3)

    console.log(myn1);
    console.log("B", myArr);

    const myn2 = myArr.splice(1,3)
    console.log("C", myArr);
    console.log(myn2);