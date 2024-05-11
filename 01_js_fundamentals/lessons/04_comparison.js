// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);


/*
For maths and other comparisons < > <= >=
null/undefined are converted to numbers: null becomes 0, while undefined 
becomes NaN.

Now let’s see some funny things that happen when we apply these rules. 
And, what’s more important, how to not fall into a trap with them.

*/
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);


/*

Mathematically, that’s strange. The last result states that "null is greater 
than or equal to zero", so in one of the comparisons above it must be true, 
but they are both false.

The reason is that an equality check == and comparisons > < >= <= work 
differently. Comparisons convert null to a number, treating it as 0. That’s
 why (3) null >= 0 is true and (1) null > 0 is false.

On the other hand, the equality check == for undefined and null is defined 
such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.

*/
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

/*
Why does it dislike zero so much? Always false!

We get these results because:

Comparisons (1) and (2) return false because undefined gets converted to NaN 
and NaN is a special numeric value which returns false for all comparisons.

The equality check (3) returns false because undefined only equals null, u
ndefined, and no other value.

*/

// === 

console.log("2" === 2);