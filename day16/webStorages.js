/*  web storage is new with HTML5 API offering important benefits over the traditional cookies
    prior to html5 data had to be stored via cookies which was used in every server request
    web storage is more secure, particularly with large amounts of data as it can be stored locally
    mitigating some performance impacts
    cookies are up to ~4kb whereas web storage is entirely local and can be at least 5mb

    two types of WebStorage objects:
    - sessionStorage
    - localStorage

    local is similar to session, except that data is persistent through page refreshes/exits
    neither types are specific to the protocol of the page, and key/value pairs are always strings

    usages:
    - storing temp dat
    - saving products for a user's shopping cart
    - data made available offline between instances
    - WebStorage is a good performance boost when some static data is stored client-side
    - userAuth usecases
*/

// items are stored using setItem
localStorage.setItem('key', 'value')
localStorage.setItem('firstName', 'Jonathan')

localStorage.setItem('age', 21)
console.log(localStorage)

let skills = ['HTML', 'CSS', 'JS', 'React']
//Skills array has to be stringified first to keep the format.
const skillsJSON = JSON.stringify(skills, undefined, 4)
localStorage.setItem('skills', skillsJSON)
console.log(localStorage) // Storage {age: '200', firstName: 'Asabeneh', skills: 'HTML,CSS,JS,React', length: 3}

const user = {
    firstName: 'Asabeneh',
    age: 250,
    skills: ['HTML', 'CSS', 'JS', 'React']
}

const userText = JSON.stringify(user, undefined, 4)
localStorage.setItem('user', userText)

// items are retrieved using getItem
localStorage.getItem('key')

let firstName = localStorage.getItem('firstName')
let age = localStorage.getItem('age')
skills = localStorage.getItem('skills')
console.log(firstName, age, skills)

// localStorage can be cleared using clear()
localStorage.clear()