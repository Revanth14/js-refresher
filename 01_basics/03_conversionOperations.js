let score = 33;
let score1 = null
let score2 = undefined
let score3 = true

let score1InNumber = Number(score1) // null gets converted into 0
let score2InNumber = Number(score2) // undefined will give output as Nan
let score3InNumber = Number(score3) // True is 1

// console.table([score1InNumber,score2InNumber, score3InNumber])

// console.log(typeof score)
// console.log(typeof(score))

let valueInNumber = Number(score)

// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = 'Revanth'

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 22;
let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)

// *********************** Operations ***********************

let value = 3;
let negValue = -value
// console.log(value)
// console.log(negValue)

//-----------------------------------------------------------

/*
console.log(10+20)
console.log(10-20)
console.log(10*20)
console.log(10/20)
console.log(2**3)
console.log(2%3)
console.log(20%3)
*/

// String Operations
let str1 = 'hello'
let str2 = 'Revanth'

let str3 = str1+str2
// console.log(str3)

/*
console.log(typeof("1" + 2));
console.log(typeof(1 + "2"));
console.log(typeof("1" + 2 + 2));
console.log(typeof(1 + 2 + "2"));
*/

// console.log( (3 + 4) * 5 % 3);


// console.log(+true);
// console.log(+"");

let num1 , num2, num3
num1= num2 = num3= 5

// console.log(num2)

let gameCounter = 100;
// gameCounter++
// ++gameCounter
// console.log(gameCounter) // 102

console.log(gameCounter++) //100
console.log(++gameCounter) // 102