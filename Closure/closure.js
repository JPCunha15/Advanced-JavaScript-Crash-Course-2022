/* A closure is the combination of a function bundled together with references to its surrounding state.
Closures are created every time a function is created, at function creation time */

// A closure is a function having access to the parent scope, 
// even after the parent function has popped.

//In other words, a closure gives you access to an outer function's scope from an inner function.

//In JS, when we return a function from another function,

/* Closure are function that can access values outside of their own curly brances
https://www.youtube.com/watch?v=vKJpN5FAeF4
let b = 3
function x(){
    return a+ b;
} */

function outer(){
    let counter = 0
    function inner() {
        counter++
        console.log(counter)
    }
    return inner
}
const fn = outer()
fn() // 1
fn() // 2