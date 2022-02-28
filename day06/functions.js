// declaring a function
function functionName() {
    // code here
}
functionName() // call it with name and parentheses

// function with param and return
function square() {
    let num = 2
    let sq = num * num
    console.log(sq)
}

square()

function addTwoNumers() {
    let numOne = 10
    let numTwo = 20
    let sum = numOne + numTwo

    console.log(sum)
}

addTwoNumers()

function printFullname() {
    let firstName = 'Jonathan',
        lastName = 'Garibsingh',
        space = ' ',
        fullName = firstName + space + lastName

    console.log(fullName)
}

printFullname()

// return values
function printFullname() {
    let firstName = 'Jonathan',
        lastName = 'Garibsingh',
        space = ' ',
        fullName = firstName + space + lastName

    return fullName
}

console.log(printFullname())

function addTwoNumers() {
    let numOne = 2,
        numTwo = 3,
        total = numOne + numTwo

    return total
}

console.log(addTwoNumers)

// function with parameters
function printFullname(firstName, lastName) {
    return `${firstName} ${lastName}`
}

console.log(printFullname('Jonathan', 'Garibsingh'))

// many paramters
function sumArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

const numbers = [1, 2, 3, 4, 5]
console.log(sumArrayValues(numbers))

const areaOfCircle = (radius) => {
    let area = Math.PI * radius * radius;
    return area;
}
console.log(areaOfCircle(10))

// an unlimited number of params
function sumAllNums() {
    console.log(arguments)
}

sumAllNums(1, 2, 3, 4)
// [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }

function sumAllNums() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173

// now in an arrow fnc
// ... is a "spread operator" - allows iterables to be used where multiple args are expected//allows
const sumAllNums = (...args) => {
    console.log(args)
}

sumAllNums(1, 2, 3, 4)

const sumAllNums = (...args) => {
    let sum = 0
    for (const element of args) {
        sum += element
    }
    return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173

// anonymous function
const anonymousFun = function () {
    console.log(
        'I am an anonymous function and my value is stored in anonymousFun'
    )
}

// expression function
const square = function (n) {
    return n * n
}

console.log(square(2)) // 4

// self invoking functions ?
(function (n) {
    console.log(n * n)
})(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below

let squaredNum = (function (n) {
    return n * n
})(10)

console.log(squaredNum)

// Arrow Functions
// delcaration syntax
function square(n) {
    return n * n
}

// arrow syntax
const square = n => {
    return n * n
}

// if one line, then it can be written as such: return is implied
const square = n => n*n
console.log(square(4))

const changeToUpperCase = arr => {
    const newArr = []
    for (const element of arr) {
        newArr.push(element.toUpperCase())
    }
    return newArr
}

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries))

const printFullname = (firstName, lastName) => `${firstName} ${lastName}`
console.log(printFullname('Jonathan', 'Garibsingh'))

// default values - arrow functions or declaration can have defaults
const greetings = (name = 'Steve') => `${name}, welcome to 30 Days Of JavaScript!`
console.log(greetings())
console.log(greetings('Jonathan'))