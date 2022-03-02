// outputing to browser console
console.log('30 Days Of JavaScript')

// subsitution
console.log('%d %s of JavaScript', 30, 'Days')

console.log('%c30 Days Of JavaScript', 'color:green')

// console.warn() - used to inform deprecated packages or bad practices
console.warn('This is a warning')
console.warn(
    'You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!'
)
console.warn('Warning is different from error')

console.error('This is an error message')
console.error('We all make mistakes')

// console.table() - displays data as a table to the console. 
const names = ['Asabeneh', 'Brook', 'David', 'John']
console.table(names)

const users = [
    {
        name: 'Asabeneh',
        title: 'Programmer',
        country: 'Finland',
        city: 'Helsinki',
        age: 250
    },
    {
        name: 'Eyob',
        title: 'Teacher',
        country: 'Sweden',
        city: 'London',
        age: 25
    },
    {
        name: 'Asab',
        title: 'Instructor',
        country: 'Norway',
        city: 'Oslo',
        age: 22
    },
    {
        name: 'Matias',
        title: 'Developer',
        country: 'Denmark',
        city: 'Copenhagen',
        age: 28
    }
]
console.table(users)

// console.time() - sets a timer with a specific name
// console.timeEnd() - ends the timer with the same name
const countries = [
    ['Canada', 'Ottawa'],
    ['New Zealand', 'Auckland'],
    ['Nigeria', 'Lagos']
]

console.time('for loop')
for (let i = 0; i < countries.length; i++) {
    console.log(countries[i][0], countries[i][1])
}
console.timeEnd('for loop')

console.time('for of loop')
for (const [name, city] of countries) {
    console.log(name, city)
}
console.timeEnd('for of loop')

console.time('forEach loop')
countries.forEach(([name, city]) => {
    console.log(name, city)
});
console.timeEnd('forEach loop')

// console.info() - displays information message to the browser console
console.info('30 Days Of JavaScript challenge is trending on Github')
console.info('30 Days Of fullStack challenge might be released')
console.info('30 Days Of HTML and CSS challenge might be released')

// console.assert() - writes an err message if assertion is false, otherwise nothing happens
console.assert(4 > 3, '4 is greater than 3')
console.assert(3 > 4, '3 is not greater than 4')

for (let i = 0; i <= 10; i += 1) {
    let errMessage = `${i} is not even`
    console.log('the # is ' + i)
    console.assert(i % 2 === 0, { number: i, errMessage: errMessage})   
}

// console.count() - increments a string parameter based on times called

const func = () => {
    console.count('Function called: ')   
}

func()
func()
func()

// console.clear() - cleans browser console