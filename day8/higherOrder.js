// callback functions is a funtion passed as a param to other functions
// higher order functions take other functions as arguements
const callback = (n) => {
    return n ** 2
}

function cube(callback, n) {
    return callback(n) * n
}

console.log(cube(callback, 3))

const numbers = [1, 2, 3, 4]

const sumArray = arr => {
    let sum = 0
    const callback = function (element) {
        sum += element
    }

    arr.forEach(callback)
    return sum
}

console.log(sumArray(numbers))

const numbers = [1, 2, 3, 4]
const sumArray = arr => {
    let sum = 0
    arr.forEach(function (element) {
        sum += element
    })
    return sum
}

console.log(sumArray(numbers))

function callback() {
    // code here
}
setInterval(callback, duration)

function sayHello() {
    console.log('Hello')
}

setInterval(sayHello, 1000)

setInterval(sayHello, 2500)

// arr.forEach
// iterates through each element in an array

// arr.map
// iterate through array and modify elements
const numbers = [1, 2, 3, 4, 5]
const numbersSquare = numbers.map((num) => num * num)

console.log(numbersSquare)

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log(namesToUpperCase)

// arr.filter
// return new array of items which match the filter
const scores = [
    { name: 'Asabeneh', score: 95 },
    { name: 'Lidiya', score: 98 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
]

const scoresGreaterEight = scores.filter((score) => score.score > 80)
console.log(scoresGreaterEight)

// arr.reduce
// accumulator, current and initial value - returns one value
// initial is option, otherwise chooses first element of array
const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((acc, cur) => acc + cur, 0)

console.log(sum)

// arr.every
// verifies all elements are similar in one way, returns bool
const bools = [true, true, true, true]
const areAllTrue = bools.every((b) => b === true) // all elements true?

console.log(areAllTrue)

// arr.find
// return first element that satisfies the param
const ages = [24, 22, 25, 31, 18, 35]
const age = ages.find((age) => age < 20)

console.log(age)

// arr.findIndex
// return the index of first match
const ages = [24, 22, 25, 31, 18, 35]
console.log(ages.findIndex((age) => age < 20))

// arr.some
// check if some elements are similar in some way
const bools = [true, true, false, false]

console.log(bools.some((b) => b === true))

// arr.sort
// sorts ascending or descending
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort())

const numbers = [9.81, 3.14, 100, 37]
numbers.sort((a, b) => a - b) // sort ascending order
console.log(numbers)

// when sorting objects ensure to use the keys in the sort function
const users = [
    { name: 'Asabeneh', age: 150 },
    { name: 'Brook', age: 50 },
    { name: 'Eyo', age: 100 },
    { name: 'Elias', age: 22 },
]

users.sort((a, b) => {
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
})
console.log(users)