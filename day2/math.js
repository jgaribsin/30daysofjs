let age = 35;
const gravity = 9.81; // we use const for non-changing values such as this gravitational constant in m/s2
let mass = 72; // kilograms
const PI = 3.14; // gemoetrical constant

const boilingPoint = 100;
const bodytemp = 37

console.log(age, gravity, mass, PI, boilingPoint, bodytemp)

console.log(Math.round(PI))
console.log(Math.round(9.81))
console.log(Math.floor(PI))
console.log(Math.ceil(PI))
console.log(Math.min(-5, 3, 20, 4, 5, 10))
console.log(Math.max(-5, 3, 20, 4, 5, 10))

const randNum = Math.random() // radom number between 0 and .999999
console.log(randNum)

// let's create random number between 0 and 10
const num = Math.floor(Math.random() * 11)
console.log(num)

// absolute vals
console.log(Math.abs(-10))

// square roots
console.log(Math.sqrt(100))
console.log(Math.sqrt(2))

// powers
console.log(Math.pow(3, 2))

console.log(Math.E)

// logarithm
// returns the natual log with base E of x, Math.log(x)
console.log(Math.log(2))
console.log(Math.log(10))

// trigonometry
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)

let randomNum = Math.random() // 0 to .999. . . . 

let randomZeroToTen = randomNum * 11
console.log(randomZeroToTen) // outputs: 0 to 10.99

let randomNumFloored = Math.floor(randomZeroToTen)
console.log(randomNumFloored) // outputs 0 to 10