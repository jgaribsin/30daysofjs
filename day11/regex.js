/*
regular expressions is a small programming language 
used to find patterns in data. a regexp is used to find patterns
in a different data type
*/

// regexp uses flags
// g - global, searches whole text
// i - case insensitive, searches lower and uppercase
// m - multiline

// using regexp constructor
let pattern = 'love'
let regEx = new RegExp(pattern)

let pattern = 'love'
let flag = 'gi'
let regEx = new RegExp(pattern, flag)

let regEx = new RegExp('love', 'gi')

// without the constructor
let regEx = /love/gi

// regex object methods
// test() - checks for matches, return true/false
const str = 'I love JavaScript'
const pattern = /love/
const result = pattern.test(str)
console.log(result)

// match() - returns array of all matches
// without a global flag it returns an array 
// containing pattern, index, input and group
const str = 'I love JavaScript'
const pattern = /love/g
const result = str.match(pattern)
console.log(result)

// search() - tests for match of string, returns the index found or -1 
// if fail
const str = 'I love JavaScript'
const pattern = /love/g
const result = str.search(pattern)
console.log(result)

// replace() - searches a string for the substring, replaces match
const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python/gi, 'JavaScript')
console.log(matchReplaced)

// [] and specifiers
const txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matches = txt.match(/[Aa]pple/g) // [] -> A or a
console.log(matches) 

const txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matches = txt.match(/[Aa]pple|[Bb]nanna/g)
console.log(matches)

// \ - escape character
// + - one or more times
const pattern = /\d+/g  // d is a special character which means digits
const txt = 'This regular expression example was made in February 28, 2022.'
const matches = txt. match(pattern)

console.log(matches)  // [ '28', '2022' ]

// . - any char but newline
// (*) - zero or more times
const pattern = /[a].*/g  // this square bracke means any character except new line
const txt = 'Apple and banana are fruits'
const matches = txt.match(pattern)

console.log(matches)  // [ 'and banana are fruits' ]

// (?) - zero or more times
const txt = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
const pattern = /[Ee]-?mail/g  // ? means optional
matches = txt.match(pattern)

console.log(matches)  // ["e-mail", "email", "Email", "E-mail"]

// {integer} - quantifier, length of substr
const txt = 'This regular expression example was made in December 6,  2019.'
const pattern = /\d{4}/g  // a digit four times
const matches = txt.match(pattern)
console.log(matches)  // ['2019']

// ^ - either starts with, or negation
// negation is within square braces to negate characters
const pattern = /^This/          // starts with "This"
const pattern = /[^A-Za-z,. ]+/g // not A-Z, not a-z, not comma, not period, not space

// ^ starting $ ending - exact match
const pattern = /^[A-Z][a-z]{2,12}$/ // starts with capital letter, rest are common letters, length 3 to 12
let name = 'Jon'
console.log(pattern.test(name))