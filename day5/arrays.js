// creating arrays

const exampleOne = Array()

let exampletwo = new Array()

const exampleThree = []

const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)

console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)

// different data types within the same array
const arr = [
    'Jonathan',
    21,
    true,
    { country: 'Canada', city: 'Edmonton' },
    { skills: ['JavaScript', 'Python', 'LaTeX'] }
]
console.log(arr)

// string method split to create arrays
let js = 'JavaScript'
const charsInJavaScript = js.split('')

console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')

console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]

// using array indices to access contents
const fruits = ['banana', 'orange', 'mango', 'lemon']
let lastIndex = fruits.length - 1
lastFruit = fruits[lastIndex]

console.log(lastFruit)  // lemon

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
] // different web technologies

console.log(webTechs)        // all
console.log(webTechs.length) // arr size
console.log(webTechs[0])     //  1st item - HTML
console.log(webTechs[6])     //  7th item - MongoDB

let lastIndex = webTechs.length - 1
console.log(webTechs[lastIndex]) // final item - MongoDB

// arrays are mutable, even if defined using const
const numbers = [1, 2, 3, 4, 5]
numbers[0] = 10      // changing 1 at index 0 to 10
numbers[1] = 20      // changing  2 at index 1 to 20

console.log(numbers) // [10, 20, 3, 4, 5]

// array methods

// constructor
const arr = Array()
const sevenEmptyValues = Array(7)

// fill - fills with arg
const arr = Array(9).fill('X') // fills with 'X'
const arr = Array(9).fill(4)   // fills with '4'

// concat - joins two arrs
const fruits = ['banana', 'orange', 'mango', 'lemon']                 // array of fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of vegetables
const fruitsAndVeggies = fruits.concat(vegetables)

// length - length of arr (NOT THE INDEX VALS)
const length = fruitsAndVeggies.length

// indexOf() - first index of arg in arr, else -1 if not present
const orangeIndex = fruitsAndVeggies.indexOf('orange') // 1, second item in arr
const potatoIndex = fruitsAndVeggies.indexOf('potato') // -1, doesn't exist in arr
console.log(orangeIndex, potatoIndex)

// lastIndexOf() - last index of arg in arg, else -1 if not present
const numbers = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(numbers.lastIndexOf(2)) //  7
console.log(numbers.lastIndexOf(0)) // -1
console.log(numbers.lastIndexOf(1)) //  6
console.log(numbers.lastIndexOf(4)) //  3
console.log(numbers.lastIndexOf(6)) // -1

// includes() - boolean return ? in arr
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

console.log(webTechs.includes('Node'))  // true
console.log(webTechs.includes('C++'))     // false

// Array.isArray() - is this var an arr?
const numbers = [1, 2, 3, 4, 5]
console.log(Array.isArray(numbers)) // true

const number = 3
console.log(Array.isArray(number)) // false

// toString() - string representation of arr - joined by comma
const names = ['Jonathan', 'Mathias', 'Elias', 'Brook']
console.log(names.toString()) // Jonathan,Mathias,Elias,Brook

// join()  - string representation of arr - joined by arg, default comma
const names = ['Jonathan', 'Mathias', 'Elias', 'Brook']

console.log(names.join()) // Jonathan,Mathias,Elias,Brook
console.log(names.join('')) //JonathanMathiasEliasBrook
console.log(names.join(' ')) //Jonathan Mathias Elias Brook
console.log(names.join(', ')) //Jonathan, Mathias, Elias, Brook
console.log(names.join(' # ')) //Jonathan # Mathias # Elias # Brook

// slice() - takes 2 args: start, end. end is not included
const numbers = [1, 2, 3, 4, 5]

console.log(numbers.slice())                    // all
console.log(numbers.slice(0, numbers.length))   // all
console.log(numbers.slice(1, 4))                 // all but last

// push() - 
const arr = ['item1', 'item2', 'item3']
arr.push('very cool item')

console.log(arr)
// ['item1', 'item2','item3','very cool item']

// pop() - remove ending element
const numbers = [1, 2, 3, 4, 5]
numbers.pop() // remove last

console.log(numbers) // [1,2,3,4]

// shift() - remove beginning element
const numbers = [1, 2, 3, 4, 5]
numbers.shift()

console.log(numbers) // [2,3,4,5]

// unshift() - add from beginning
const numbers = [1,2,3,4,5]
numbers.unshift(0)

console.log(numbers) // [0,1,2,3,4,5]

// reverse() - reverses the array
const numbers = [1, 2, 3, 4, 5]
numbers.reverse()

console.log(numbers) // [5, 4, 3, 2, 1]

numbers.reverse()
console.log(numbers) // [1, 2, 3, 4, 5]

// sort() - sorts in ascending order, or using a callback fnc
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  webTechs.sort()
  console.log(webTechs) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]
  
  webTechs.reverse()    // reversed after sort
  console.log(webTechs) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]

// arrays of arrays!
const firstNums = [1, 2, 3]
const secondNums = [1, 4, 9]

const arrayOfArray =  [[1, 2, 3], [1, 2, 3]]
console.log(arrayOfArray[0]) // [1, 2, 3]

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = [frontEnd, backEnd]
console.log(fullStack)          // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length)   // 2
console.log(fullStack[0])       // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1])       // ["Node", "Express", "MongoDB"]