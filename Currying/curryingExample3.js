//Another Example

const multiple = (x, y) => x * y

const curriedMultiply = x => y => x * y


console.log(multiple(2,3)) // 6

console.log(curriedMultiply(2)) // [Function (anonymous)]

console.log(curriedMultiply(2)(3)) // 6

// ----------
// Partially applied functions are a common use of currying

const timesTen = curriedMultiply(10)

console.log(timesTen) // [Function (anonymous)]
console.log(timesTen(8)) // 80


/////

/* Advanced currying
Here is a code example of advanced currying: */

const curry =(fn) =>{
    return curried = (...args) => {
        if (fn.length !== args.length){
            return curried.bind(null, ...args)
        }
        return fn(...args);
    };
}
const totalNum=(x,y,z) => x+y+z;

const curriedTotal = curry(totalNum);
console.log(curriedTotal(10) (20) (30)); // 60