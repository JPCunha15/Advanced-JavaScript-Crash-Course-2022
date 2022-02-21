// https://www.youtube.com/watch?v=1S8SBDhA7HA try again

// Lexical Scope defines how variables names are resolved in nested functions
// Lexical scope is the ability for a function scope to access variables from the parent scope

// Nested (child) functions have access to the scope of their parent functions

// This is often confused with closure, but lexical scope is only an important part of closure

// Lexical scope is not closure
//----

//Lexical Scope Example

// global scope
let x = 1

const parentFunction = () =>{
    //local scope
    let myValue = 2
    console.log(x)
    console.log(myValue)

    const childFunction = () =>
    {
        //Lexical Scope
        console.log(x += 5)
        console.log(myValue += 1)
    }
    childFunction()
}

//parentFunction()

//w3schools  A closure is a function having access to the parent scope, even after the parent function has closed
// A closure is created when we define a function, not when a function is executed


const parentFunction2 = () =>{
    //local scope
    let myValue = 2
    console.log(x)
    console.log(myValue)

    const childFunction2 = () =>
    {
        //Lexical Scope
        console.log(x += 5)
        console.log(myValue += 1)
    }
    return childFunction2
}

const result = parentFunction2()
result()
result()