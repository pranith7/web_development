/* 

Most of the time, operators and functions automatically convert the values 
given to them to the right type.

For example, alert automatically converts any value to a string to show it. 
Mathematical operations convert values to numbers.

There are also cases when we need to explicitly convert a value to 
the expected type.


Number conversion rules:

    Value	Becomes…
    undefined	NaN
    null	0
    true and false	1 and 0
    string	Whitespaces (includes spaces, tabs \t, newlines \n etc.) 
            from the start and end are removed. If the remaining string 
            is empty, the result is 0. Otherwise, the number is “read”
            from the string. An error gives NaN.


Boolean conversion rules:
    Boolean conversion is the simplest one.

    Boolean conversion is the simplest one.

    It happens in logical operations (later we’ll meet condition tests 
    and other similar things) but can also be performed explicitly 
    with a call to Boolean(value).

    The conversion rule:

    Values that are intuitively “empty”, like 0, an empty string, null, 
    undefined, and NaN, become false. Other values become true.


*/
let score = "hitesh"

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);





// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion