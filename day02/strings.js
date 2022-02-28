let space = ' ', // space string
firstName = 'Jonathan',
lastName = 'Garibsingh',
country = 'Canada',
city = 'Edmonton', 
language = 'JavaScript',
age = '21',
job = 'student',
quote = "",
quoteWithBackTick = ``

let fullname = firstName + space + lastName
console.log(fullname)

let personInfoOne = fullname + '. I am ' + age + '. I live in ' + country; // ES5 string addition

console.log(personInfoOne)

const paragraph = "this \
is an example of \
a string that \
spans multiple lines";

console.log(paragraph)

console.log('I hope everyone is enjoying the 30 Days Of JavaScript Challenge. \nI currently am!') // line break here
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash sumbol (\\)') // writing a literal backslash
console.log('In every programming language it starts with \"Hello World!\"')
console.log("In every programming language it starts with \'Hello World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

// example 2
let personInfoTwo = `I am ${fullname}. I am ${age}. I live in ${country}.` // ES6 - String interpolation method
let personInfoThree = `I am ${fullname}. I live in ${city}, ${country}. I am a ${job}. I am learning ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)

let a = 2, b = 3
console.log(`${a} is greater than ${b}: ${a > b}`)

let js = 'JavaScript'
console.log(js.length)
console.log(firstName.length)

let string = 'JavaScript'
let firstLetter = string[0]

console.log(firstLetter)

let secondletter = string[1],
thirdLetter = string[2]
lastLetter = string[9]

console.log(lastLetter)

let lastIndex = string.length - 1

console.log(lastIndex)
console.log(string[lastIndex])

// toUpperCase() showcase
console.log(string.toUpperCase())

console.log(firstName.toUpperCase())

console.log(country.toUpperCase())

// toLowerCase() showcase
console.log(string.toLowerCase())

console.log(firstName.toLowerCase())

console.log(country.toLowerCase())

// substr() takes 2 args, gives the string between them
console.log(string.substr(4, 6))

console.log(country.substr(0, 3))

// substring() takes 2 args, gives the string between but excluding stopping index
console.log(string.substring(0, 4))
console.log(string.substring(4, 10))
console.log(string.substring(4))

console.log(country.substring(0, 3))
console.log(country.substring(3, 6))
console.log(country.substring(3))

// split() splits string at a specific place, returns array
string = '30 Days Of JavaScript'

console.log(string.split())
console.log(string.split(' '))

console.log(firstName.split())
console.log(firstName.split(''))

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'
console.log(countries.split(','))
console.log(countries.split(', '))

// trim() removes trailing space at beginning or end of a string
string = '     30 Days Of JavaScript    '

console.log(string)
console.log(string.trim(' '))

firstName = ' Jonathan '

console.log(firstName)
console.log(firstName.trim())

// includes() takes substring arg, checks if exists and returns a boolean value whether that substring is found
string = '30 Days Of JavaScript'

console.log(string.includes('Days'))    // true
console.log(string.includes('days'))    // false, this is case sensitive
console.log(string.includes('Script'))  // true
console.log(string.includes('script'))  // false
console.log(string.includes('java'))    // false
console.log(string.includes('Java'))    // true

country = 'Canada'

console.log(country.includes('can'))   // false
console.log(country.includes('Can'))   // true
console.log(country.includes('ada'))   // true
console.log(country.includes('Ada'))   // false 

// replace() replaces first arg substring with second arg substring
console.log(string.replace('JavaScript', 'Python'))

console.log(country.replace('Can', 'Can\'t'))

// charAt() takes index, returns that index's char value
console.log(string.charAt(0))

lastIndex = string.length - 1
console.log(string.charAt(lastIndex))

// charCodeAt() takes index, returns char code (ASCII number) of the value at that index
console.log(string.charCodeAt(3))

console.log(string.charCodeAt(lastIndex))

// indexOf() takes substring and, if exists in string, returns the first position of the substr, else ret -1
console.log(string.indexOf('D'))            // 3
console.log(string.indexOf('Days'))         // 3
console.log(string.indexOf('days'))         // -1
console.log(string.indexOf('a'))            // 4
console.log(string.indexOf('JavaScript'))   // 11
console.log(string.indexOf('Script'))       // 15
console.log(string.indexOf('script'))       // -1

// lastIndexOf() takes substring and, if exists, returns the LAST position of the substr, else ret -1
string = 'I love JavaScript. If you do not love JavaScript what else can you love.'

console.log(string.lastIndexOf('love'))         // 67
console.log(string.lastIndexOf('you'))          // 63
console.log(string.lastIndexOf('JavaScript'))   // 38

// concat() takes strings as args and joins them
string = '30'
console.log(string.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript

country = 'Can'
console.log(country.concat("ada"))

// startsWith() takes substring as arg and checks if the string starts with that substr. returns boolean
string = 'Love is the best in this world'

console.log(string.startsWith('Love'))  // true
console.log(string.startsWith('love'))  // false
console.log(string.startsWith('world')) // false

country = 'Canada'

console.log(country.startsWith('Can'))  // true
console.log(country.startsWith('can'))  // false
console.log(country.startsWith('ada'))  // false

// endsWith() takes substring as arg and checks if the string ends with that substr. returns boolean
string = 'Love is the most powerful feeling in the world'

console.log(string.endsWith('world'))           // false
console.log(string.endsWith('love'))            // false
console.log(string.endsWith('in the world'))    // true

console.log(country.endsWith('ada'))    // true
console.log(country.endsWith('can'))    // false
console.log(country.endsWith('Can'))    // false

// search() takes substr as arg and returns index of the first match. can be string or regular expression pattern
string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.search('love'))          // 2
console.log(string.search(/javascript/gi))  // 7

// match() takes substr or regex as arg and returns an array if there is a match, otherwise ret null
// regex starts with / and ends with /
string = 'love'
let parrternOne = /love/,    // without any flags
patternTwo = /love/gi        // g means to search in whole text, i means case insensitive

string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.match('love'))

let pattern = /love/gi
console.log(string.match(pattern))

let txt = 'In 2019, I ran 30 Days Of Python. Now, in 2020 I am super excited to start this challenge',
regEx = /\d+/

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]

// repeat() takes number as arg and returns that string repeated
string = 'love'
console.log(string.repeat(10))

firstName = 'Jonathan'  // string
lastName = 'Garibsingh' // string
country = 'Canada'      // string
city = 'Edmonton'       // string
age = 21                // number
let occupation          // undefined
// because '' is used before

console.log(typeof 'Jonathan')  // string
console.log(typeof firstName)   // string
console.log(typeof 10)          // number
console.log(typeof 3.14)        // number
console.log(typeof true)        // boolean
console.log(typeof false)       // boolean
console.log(typeof NaN)         // number
console.log(typeof occupation)  // undefined
console.log(typeof undefined)   // undefined
console.log(typeof null)        // object

// string to int
let num = '10'

numInt = parseInt(num)
console.log(numInt)

numInt = Number(num)
console.log(numInt)

numInt = +num
console.log(numInt)

// string to float
num = '9.81'

numFloat = parseFloat(num)
console.log(numFloat)

numFloat = Number(num)
console.log(numFloat)

numFloat = +num
console.log(numFloat)

// float to int
numInt = parseInt(num)

console.log(numInt) // 9