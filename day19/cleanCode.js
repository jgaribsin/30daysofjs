/*  you should follow a style guide when writing code
    this means that your code should follow generally accepted/popular conventions to assist in readability
    most important is to be consistent with how you write code

    some popular standards are:
        Airbnb Style Guide - https://github.com/airbnb/javascript
        JavaScript Standard Style Guide - https://standardjs.com/
        Google JavaScript Style Guide - https://google.github.io/styleguide/jsguide.html
    
    conventions cover:
        naming and declaration rules for variables
        naming and declaration rules for functions
        rules for whitespace, indentation, comments
        programming practices, principles

    conventions used in this challenge:
        camelCase is preferred
        variables start with a letter
        const for constants, arrs, objs, fncs
        use of single quote or backtick over doubletick
        no use of semicolons
        spaces around arithmetic operators, assignment operators and after commas
        arrow functions instead of function declaration
        explicit return for one line functions rather than implicit return
        no trailing comma in last object value
        +=, -=, *=, /=, **= over longform
        console.log() used with tag string to identify where the console is coming from

    time for examples
*/

// Variables
let firstName = 'Jonathan'
let lastName = 'Garibsingh'

const PI = Math.PI
const gravity = 9.81

// Arrays - plural names
const fruits = ['banana', 'orange', 'mango', 'lemon']

// Functions - preferred use of arrow functions, but is not always the best choice
// function that returns full name of a person
const printFullName = (firstName, lastName) => firstName + ' ' + lastName

// function that returns its input value squared
const square = (n) => n * n

// function that returns a random hex val
const hexaColor = () => {
    const str = '0123456789abcef'
    let hexa = '#'
    let index
    for (i = 0; i < 6; i++) {
        index = Math.floor(Math.random() * str.length)
        hexa += str[index]
    }
    return hexa
}

const vegetables = ['potato', 'onion', 'garlic', 'carrot', 'cabbage']

// iterating using regular for loop
for (let i = 0; i < vegetables.length; i++) {
    console.log(vegetables[i].toUpperCase())
}

// iterating using for of
for (const vegetable of vegetables) {
    console.log(vegetable.toUpperCase())
}

// iterating using forEach
vegetables.forEach((vegetable) => console.log(vegetable.toUpperCase()))

// declaring objects - use const
const person = {
    firstName: 'Jonathan',
    lastname: 'Garibsingh',
    age: 21,
    country: 'Canada',
    city: 'Edmonton',
}

// iterating through object keys
for (const key in person) {
    console.log(key, person[key])
}

// conditionals
// if, else if, else
let num = 3
if (num > 0) {
    console.log(`${num} is a positive number`)
} else if (num < 0) {
    console.log(`${num} is a negative number`)
} else if (num == 0) {
    console.log(`${a} is zero`)
}
else {
    console.log(`${a} is not a number`)
}

// switch
let day = 'Wednesday'.toLowerCase()
switch (day) {
    case 'monday':
        console.log('Today is Monday')
        break
    case 'tuesday':
        console.log('Today is Tuesday')
        break
    case 'wednesday':
        console.log('Today is Wednesday')
        break
    case 'thursday':
        console.log('Today is Thursday')
        break
    case 'friday':
        console.log('Today is Friday')
        break
    case 'saturday':
        console.log('Today is Saturday')
        break
    case 'sunday':
        console.log('Today is Sunday')
        break
    default:
        console.log('Today is not a day')
        break
}

// ternary
let isRaining = true
isRaining
? console.log('You need a rain coat.')
: console.log('No need for a rain coat')

// classes - use CamelCase
class Person {
    constructor(firstName, lastName) {
        console.log(this)
        this.firstName = firstName
        this.lastName = lastName
    }
}