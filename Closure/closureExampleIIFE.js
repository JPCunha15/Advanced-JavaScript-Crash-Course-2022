// IIFE (Immediately Invoked Function Expression)
// Closure with an IIFE

/* Example of IIFE :
(() => {
    function..
})()
*/

const privateCounter = (() => {
 let count = 0
 console.log(`initial value: ${count}`)
 return ()=> {count+=1; console.log(count)}
})()

// initial value: 0  Only once
privateCounter() // 1
privateCounter() // 2


//////////////////
// Closure with an IIFE and a parameter 

const credits = ((num) => {
    let credits = num
    console.log(`initial credits value: ${credits}`)
    return ()=> {
        credits -= 1;
        if(credits > 0) console.log(`playing game, ${credits} credit(s)`)
        if(credits <= 0) console.log(`not enough credits`)
    }
})(3)

credits()
credits()
credits()

/*
initial credits value: 3
playing game, 2 credit(s)
playing game, 1 credit(s)
not enough credits*/


