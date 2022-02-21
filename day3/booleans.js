// booleans
let isLightOn = true, 
isRaining = false,
isHungry = false,
isMarried = false,
truValue = 4 > 3,
falseValue = 4 < 3

let firstName
console.log(firstName)

let empty = null
console.log(empty) // -> null, means no value

// assignment operators
firstName = 'Jonathan'
let country = 'Canada'

let numOne = 4,
numTwo = 3,
sum = numOne + numTwo,
diff = numOne - numTwo,
mult = numOne * numTwo,
div = numOne / numTwo,
remainder = numOne % numTwo,
powerof = numOne ** numTwo

console.log(sum, diff, mult, div, remainder, powerof)

const PI = 3.14
let radius = 100

// let's calc area of circle
const areaOfCircle = PI * radius * radius
console.log(areaOfCircle) // 314m


const gravity = 9.81    // in m/s2
let mass = 72           // in Kilogram

// let's calc weight of an object
const weight = mass * gravity
console.log(weight)

const boilingPoint = 100    // temperature in oC, boiling point of water
const bodyTemp = 37         // body temperature in oC

// concatenating string with numbers using string interpolation
/* 
    The boiling point of water is 100 oC
    Human body temperature is 37 oC
    The gravity of earth is 9.81 m/s2
*/
console.log(
    `The boiling point of water is ${boilingPoint} oC. \nHuman body temperature is ${bodyTemp} oC. \nThe gravity of earth is ${gravity} m/s2.`
)

// comparison operators
console.log(3 > 2)              // true
console.log(3 >= 2)             // true
console.log(3 < 2)              // false
console.log(2 < 3)              // true
console.log(2 <= 3)             // true
console.log(3 == 2)             // false
console.log(3 != 2)             // true
console.log(3 == '3')           // true
console.log(3 === '3')          // false
console.log(3 !== '3')          // true
console.log(3 != 3)             // false
console.log(3 !== 3)            // false
console.log(0 == false)         // true
console.log(0 === false)        // false
console.log(0 == '')            // true
console.log(0 == ' ')           // true
console.log(0 === '')           // false
console.log(1 == true)          // true
console.log(1 === true)         // false
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length) // false
console.log('mango'.length != 'avocado'.length) // true
console.log('mango'.length < 'avocado'.length)  // true
console.log('milk'.length == 'meat'.length)     // true
console.log('milk'.length != 'meat'.length)     // false
console.log('tomato'.length == 'potato'.length) // true
console.log('python'.length > 'dragon'.length)  // false

// window methods
/*
alert('Welcome to 30DaysOfJavaScript')

let number = prompt('Enter number', 'number goes here')
console.log(number)

const agree = confirm('Are you sure you like to delete? ')
console.log(agree) // results true or false
*/

// messing with dates
let now = new Date()
console.log(now)

console.log(now.getMonth()) // 1: 2nd month of 0-11

console.log(now.getDate()) // 21st of feb

console.log(now.getDay()) // 1: it's monday

console.log(now.getHours()) // 3: it's 3am

console.log(now.getSeconds()) // 43 at time of compiling

console.log(now.getTime()) // 1645438172535 this is the number of seconds from jan1, 1970

const allSeconds = Date.now()
console.log(allSeconds) // 1645438211723

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds) // true

now = new Date()
const year = now.getFullYear(),
month = now.getMonth(),
date = now.getDate(),
hours = now.getHours(),
minutes = now.getMinutes()

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 21/1/2022 3:13 