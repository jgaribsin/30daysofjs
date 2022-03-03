// javascript is loosely typed so error handling is usefule to catch runtime errors

try {
    // code that may throw an error
}   catch (err) {
    // executes if error occurs
}   finally {
    // code to execute with or without error
}

// throw - allows us to create a custom error

throw 'Error2'
throw 42
throw true
throw new Error('Required')

const throwExampleError = () => {
    let message
    let x = prompt('Enter a number: ')
    try {
        if (x == '') throw 'empty'
        if (isNaN(x)) throw 'not a number'
        x = Number(x)
        if (x < 5) throw 'too low'
        if (x > 10) throw 'too high'
    } catch (err) {
        console.log(err)
    }
}

throwExampleError()

// types of errors

// ReferenceError - illegal reference - eg. using variable that hasn't been declared
// SyntaxError - incorrect code structuring
// TypeError - inappropriate type 
