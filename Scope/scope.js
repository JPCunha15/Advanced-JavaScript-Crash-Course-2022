// Scope basically determines the accessibility or visibility of variables

// Block scope
/* A block scope is the area within if, switch conditions or for and while loops.
Generally speaking, whenever you see {curly brackets}, it is a block.
In ES6, const and let keywords allow developers to declare variables in the block scope,
which means those variables exist only within the corresponding block. */

if(true){
    const myName = 'Joao'
    console.log(myName) // correct
}
// console.log(myName) Error


///////////////
// Function scope
/* Whenever you declare a variable in a function, the variable is visible only within the function.
You can't access it outside the function.
var is the keyword to define variable for a function-scope accessibility. */

function testFn() {
    const myName = "Joao Fn"
    console.log(myName) // correct
}
// console.log(myNameF) Error

testFn()

///////////////
// Global Scope
/* There's only one Global scope in the JavaScript document.
The area outside all the functions is consider the global scope and the variables
defined inside the global scope can be accessed and altered in any other scopes.
*/

const myNum = 15

if(true){
    const myName = 'Joao Global'
    console.log(myName) // correct
    console.log(myNum) // correct
}

function testFnGlobal() {
    const myName = "Joao Fn Global"
    console.log(myName) // correct
    console.log(myNum) // correct
}

testFnGlobal()