const person = {
    firstName: 'Jonathan',
    lastName: 'Garibsingh',
    age: 21,
    country: 'Canada',
    city: 'Edmonton',
    skills: [
        ''
    ],
    isMarried: false,
    'phone number': '183810384',
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(person)

console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.location)

console.log(person['firstName'])
console.log(person['lastName'])
console.log(person['age'])
console.log(person['location'])

// must use square brackets as it's not one word
console.log(person['phone number'])

console.log(person.getFullName())

// adding new key:values
person.nationality = 'West Indian'
person.country = 'Canada'
person.city = 'Edmonton'
person.title = 'student'

person.getPersonInfo = function () {
    return `${this.getFullName()} is a ${this.title}.\nHe lives in ${this.city}, ${this.country}.`
}

console.log(person.getPersonInfo())

// methods: .assign, .keys, .values, .entries, .hasOwnProperty

// copies an object over without changing the original
const copyPerson = Object.assign({}, person)
console.log(copyPerson)

// accesses all keys of an object
const keys = Object.keys(copyPerson)
console.log(keys)

// access all values of an object's keys
const values = Object.values(copyPerson)
console.log(values)

// access all keys and values of an object
const entries = Object.entries(copyPerson)
console.log(entries)

// checks if a specific key or property exists
console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('score'))