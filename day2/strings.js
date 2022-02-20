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