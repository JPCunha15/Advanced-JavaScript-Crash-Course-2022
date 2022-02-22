/*Function Currying

Currying is a process in functional programming in which we transform a function with multiple
arguments into a sequence of nesting functions that take one argument at the time

function f(a,b,c) is transformed to f(a)(b)(c)
*/

function sum(a,b,c) {
    return a + b + c
}

console.log(sum(2,3,5)) //10

// Currying
// sum(2)(3)(5)

function curry(fn) {
    return function (a) {
        return function (b) {
            return function (c) {
                return a + b + c
            }
        }
    }
}
const currySum = curry()
console.log(currySum(2)(3)(5)) //10

// OR

const add2 = currySum(2)
const add3 = add2(3)
const add5 = add3(5)

console.log(add5) //10


/*

Why should I use currying?
There are several reasons why currying is ideal:

Currying is a checking method to make sure that you get everything you need before you proceed
It helps you to avoid passing the same variable again and again
It divides your function into multiple smaller functions that can handle one responsibility. This makes your function pure and less prone to errors and side effects
It is used in functional programming to create a higher-order function
This could be personal preference, but I love that it makes my code readable

*/