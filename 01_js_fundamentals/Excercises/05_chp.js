let a = 1, b = 1;

let c = ++a; // ? 2 
let d = b++; // ? 1



let a = 2;

let x = 1 + (a *= 2);

//  a = 4,x = 5

/*

"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5" // (3)
"  -9  " - 5 = -14 // (4)
null + 1 = 1 // (5)
undefined + 1 = NaN // (6)
" \t \n" - 2 = -2 // (7)


The addition with a string "" + 1 converts 1 to a string: "" + 1 = "1", and then we have "1" + 0, the same rule is applied.
The subtraction - (like most math operations) only works with numbers, it converts an empty string "" to 0.
The addition with a string appends the number 5 to the string.
The subtraction always converts to numbers, so it makes " -9 " a number -9 (ignoring spaces around it).
null becomes 0 after the numeric conversion.
undefined becomes NaN after the numeric conversion.
Space characters are trimmed off string start and end when a string is converted to a number. Here the whole string consists of space characters, such as \t, \n and a “regular” space between them. So, similarly to an empty string, it becomes 0.

*/

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

a = Number(a);
b = Number(b);
alert(a + b); // 12