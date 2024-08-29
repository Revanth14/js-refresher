// console.log(2==1);
// console.log(2!=1);

// console.log('2'>1);
// console.log('02'>1)

// console.log(null>0);
/* null > 0 is false:
When null is compared with a number using >, it gets converted to 0. So this becomes 0 > 0, which is false.
*/

// console.log(null==0);
/*
null == 0 is false:
The equality operator == does not convert null to a number. null is only equal to null or undefined when using ==.
*/

// console.log(null>=0);
/*
null >= 0 is true:
This is where it gets tricky. For the >= operator, null is converted to 0. So this becomes 0 >= 0, which is true.
*/

// console.log(undefined == 0);
/*
undefined is only loosely equal to null but not to any other value, including 0. They are of different types, and JavaScript does not coerce undefined to 0 in this comparison.
*/

// console.log(undefined > 0);
/*
When undefined is used in a comparison like > or <, it gets converted to NaN (Not a Number). Any comparison with NaN always returns false
*/

// console.log(undefined < 0);
/*
When undefined is used in a comparison like > or <, it gets converted to NaN (Not a Number). Any comparison with NaN always returns false
*/

// ===
console.log('2'===2)