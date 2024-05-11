/*
Working with Variables:

    Declare two variables: admin and name.
    Assign the value "John" to name.
    Copy the value from name to admin.
    Show the value of admin using alert (must output “John”).

*/

let admin;
let name = 'John';

admin = name;
console.log(admin);

/*

Giving the right name
importance: 3
Create a variable with the name of our planet. How would you name such a variable?
Create a variable to store the name of a current visitor to a website. How would you name that variable?

*/

let planet = 'Earth';
let currentVisitor = 'John';

/*

Examine the following code:

const birthday = '18.04.1982';

const age = someCode(birthday);

Here we have a constant birthday for the date, and also the age constant.

The age is calculated from birthday using someCode(), which means a function call that we didn’t explain yet (we will soon!), but the details don’t matter here, the point is that age is calculated somehow based on the birthday.

Would it be right to use upper case for birthday? For age? Or even for both?

const BIRTHDAY = '18.04.1982'; // make birthday uppercase?

const AGE = someCode(BIRTHDAY); // make age uppercase?


*/

//  ----------------------Answer --------------------------

// We generally use upper case for constants that are “hard-coded”. Or, in other words, 
// when the value is known prior to execution and directly written into the code.

// In this code, birthday is exactly like that. So we could use the upper case for it.

// In contrast, age is evaluated in run-time. Today we have one age, a year after 
// we’ll have another one. It is constant in a sense that it does not change 
// through the code execution. But it is a bit “less of a constant” than birthday: it is calculated, so we should keep the lower case for it.