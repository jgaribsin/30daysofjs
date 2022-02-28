// destructuring is a way of unpacking arays and objects then assigning it to a variable

const numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers

console.log(numOne, numTwo, numThree)

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]

const [frontEnd, backEnd] = fullStack
console.log(frontEnd, backEnd)

// skipping values means we use additonal commas which omits that index

const numbers = [1, 2, 3]
let [numOne, , numThree] = numbers

console.log(numOne, numThree)

// we can use a default value such as undefined if that index is unknown
const names = [undefined, 'Brook', 'David']
let [
    firstPerson = 'Asabeneh',
    secondPerson,
    thirdPerson,
    fourthPerson = 'John'
] = names

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson)

// ... -> spread operator
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3)
console.log(rest)

// destructuring during iteration
countries = [
    ['Canada', 'Ottawa'],
    ['New Zealand', 'Wellington'],
    ['Nigeria', 'Lagos']
]

for (const [country, city] of countries) {
    console.log(country, city)
}

// to destructure with objects we wimply use the key/property of an object

const rectangle = {
    width: 20,
    height: 10,
    area: 200
}
let { width, height, area, perimeter } = rectangle

console.log(width, height, area, perimeter)

// we can rename the output variable during destructuring like such:
const rectangle = {
    width: 20,
    height: 10,
    area: 200
}
// if a value is undefined we can pass in a default value during destructuring as well
let { width: w, height: h, area: a, perimeter: p = 60 } = rectangle

console.log(w, h, a, p)

const rect = {
    width: 20,
    height: 10
}

// object parameter without destructuring
const calcPerimeter = rectangle => 2 * (rectangle.width + rectangle.height)

console.log(calcPerimeter(rect))

const rect = {
    width: 20,
    height: 10
}

// object param with destructuring
const calcPerimeter = ({ width, height }) => 2 * (width + height)

console.log(calcPerimeter(rect))

// destructuring object during iteration
const todoList = [
    {
        task: 'Prepare JS Test',
        time: '4/1/2020 8:30',
        completed: true
    },
    {
        task: 'Give JS Test',
        time: '4/1/2020 10:00',
        completed: false
    },
    {
        task: 'Assess Test Result',
        time: '4/1/2020 1:00',
        completed: false
    }
]

for (const { task, time, completed } of todoList) {
    console.log(task, time, completed)
}

// spread, rest operator
// when destructuring an array we used the spread operator to get the remaining elements
// we can also use this to spread array elements to another array

const nums = [1, 2, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3)
console.log(rest)

// copying arrays
const evens = [0, 2, 4, 6, 8, 10]
const evenNumbers = [...evens]

const odds = [1, 3, 5, 7, 9]
const oddNumbers = [...odds]

const wholeNumbers = [...evens, ...odds]
console.log(evenNumbers)
console.log(oddNumbers)
console.log(wholeNumbers)

// this can also be applied to objects
const user = {
    name: 'Jon',
    title: 'Programmer',
    country: 'Canada',
    city: 'Edmonton'
}

const copiedUser = { ...user }
console.log(copiedUser)

// can also change information while copying!!

const user = {
    name: 'Jon',
    title: 'Programmer',
    country: 'Canada',
    city: 'Edmonton'
}

const copiedUser = { ...user, title: 'Student' }
console.log(copiedUser)

// spread operator with arrow fnc
// clean code to spread an unlimited arg function using ...
const sumAllNums = (...args) => {
    let sum = 0
    for (const number of args) {
        sum += number
    }
    return sum
}

console.log(sumAllNums(1,2,3,4,5,6))
