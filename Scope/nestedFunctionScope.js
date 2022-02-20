let a = 10
// console.log(a, b, c) incorrect b and c missing

function outer () {
    let b = 20
    // console.log(a, b, c) // incorrect c missing
    function inner(){
        let c = 30
        console.log(a, b, c) // correct
    }
    inner()
}
outer()