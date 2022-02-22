// Currying can look like this

const buildSandwich = (ingredient1) => {
    return (ingredient2) => {
        return (ingredient3) => {
            return `${ingredient1}, ${ingredient2}, ${ingredient3}`
        }
    }
}

const mySandwich = buildSandwich("Bacon")("Lettuce")("Tomato")
console.log(mySandwich)

// OR

const buildSamy = ingredient1 => ingredient2 => ingredient3 => `${ingredient1}, ${ingredient2}, ${ingredient3}`

const mySamy = buildSamy("Bacon")("Lettuce")("Tomato")
console.log(mySamy)