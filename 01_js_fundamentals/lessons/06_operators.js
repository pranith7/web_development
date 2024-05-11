/*

Operator precedence
If an expression has more than one operator, the execution order is defined by
their precedence, or, in other words, the default priority order of operators.

From school, we all know that the multiplication in the expression 1 + 2 * 2 should be c
alculated before the addition. That’s exactly the precedence thing. T
he multiplication is said to have a higher precedence than the addition.

Parentheses override any precedence, so if we’re not satisfied with the 
default order, we can use them to change it. For example, write (1 + 2) * 2.

There are many operators in JavaScript. Every operator has a corresponding 
precedence number. The one with the larger number executes first. If the precedence is the same, the execution order is from left to right.

Here’s an extract from the precedence table (you don’t need to remember this, 
but note that unary operators are higher than corresponding binary ones):


Precedence	Name	        Sign
…	…	…
14	unary plus	            +
14	unary negation	        -
13	exponentiation	        **
12	multiplication      	*
12	division	            /
11	addition	            +
11	subtraction	            -
…	…	…
2	assignment	            =
…	…	…



*/