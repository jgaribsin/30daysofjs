/*
    callback functions
    - takes 2 params -> (error, result)
    - if err == false -> no err, otherwise err

*/

// const doSomething = callback => {
//     setTimeout(() => {
//         const skills = ['HTML', 'CSS', 'JS']
//         callback('It did not go well', skills)
//     }, 2000)
// }

// const callback = (err, result) => {
//     if (err) return console.log(err)
//     return console.log(result)
// }

// prints "It did not go well" after 2 seconds
// doSomething(callback)

const doSomething = callback => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS']
        callback(false, skills)
    }, 2000)
}

// prints skills after 2 seconds
doSomething((err, result) => {
    if (err) return console.log(err)
    return console.log(result)
})

// creating a promise can be done with the constructor

const promise = new Promise((resolve, reject) => {
    resolve('success')
    reject('failure')
})

const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS']
        if (skills.length > 0) resolve(skills)
        else reject('Something wrong has happened')
    }, 2000)
})

doPromise
    .then(result => {
        console.log(result)
    })
    .catch(error => console.log(error))
// finished with resolve -> printed skills after 2s

// fetch API
// const url = 'https://restcountries.com/v2/all' // countries api
// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//     })
//     .catch(error => console.error(error))

// however! there is a cleaner way to utilise promises that doesn't involve callback hell
// async, await

// doesn't run here, but runs in console =)
const url = 'https://restcountries.com/v2/all'
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => console.error(error))