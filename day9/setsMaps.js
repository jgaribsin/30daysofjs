const companies = new Set()
console.log(companies)

const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French'
]

const setOfLanguages = new Set(languages)
console.log(setOfLanguages)

for (const language of setOfLanguages) {
    console.log(language)
}

const companies = new Set()

companies.add('Google')
const extraCompanies = ['Google', 'Facebook', 'Amazon', 'Oracle']

for (const company of extraCompanies) {
    companies.add(company)
}

console.log(companies)

console.log(companies.delete('Google'))
console.log(companies)

console.log(companies.has('Apple'))

// removes all elements from a set
companies.clear()

const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
]
const langSet = new Set(languages)
console.log(langSet) // Set(4) {"English", "Finnish", "French", "Spanish"}
console.log(langSet.size) // 4

const counts = []
const count = {}

for (const l of langSet) {
    const filteredLang = languages.filter((lng) => lng === l)
    console.log(filteredLang) // ["English", "English", "English"]
    counts.push({ lang: l, count: filteredLang.length })
}
console.log(counts)

// union of sets using spread operator
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)

// intersection
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)

let c = a.filter((num) => B.has(num))
let C = new Set(c)

console.log(C)

// difference of sets
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)

let c = a.filter((num) => !B.has(num))
let C = new Set(c)

console.log(C)

// maps
const map = new Map()
console.log(map)

countries = [
    ['Canada', 'Ottawa'],
    ['New Zealand', 'Auckland'],
    ['Nigeria', 'Lagos']
]

const map = new Map(countries)
console.log(map)
console.log(map.size)

const countriesMap = new Map()
countriesMap.set('Canada', 'Ottawa')
countriesMap.set('New Zealand', 'Auckland')
countriesMap.set('Nigeria', 'Lagos')
console.log(countriesMap)
console.log(countriesMap.size)

console.log(countriesMap.get('Canada'))

console.log(countriesMap.has('Norway'))

for (const country of countriesMap) {
    console.log(country)
}

for (const [country, city] of countriesMap) {
    console.log(country, city)
}