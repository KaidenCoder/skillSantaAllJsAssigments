// 1. Credit Card Validation You're starting your own credit card business. You need to come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

// Here are the rules for a valid number:

// ● The number must be 16 digits, all of them must be numbers

// ● You must have at least two different digits represented (all of the digits cannot be the same)

// ● The final digit must be even

// ● The sum of all the digits must be greater than 16

// The following credit card numbers are valid:

// ● 9999777788880000

// ● 6666666666661666

// The following credit card numbers are invalid:

// ● a92332119c011112 invalid characters

// ● 4444444444444444 only one type of number

// ● 1111111111111110 sum less than 16

// ● 6666666666666661 odd final number


function validateCreditcard(str) {
    let num = parseInt(str)

    //If it contains invalid characters, return false.
    if (isNaN(num)) {
        return false
    }
    let array = [...`${num}`].map(Number)

    //If it is not a 16 digit number, return false.
    if (array.length != 16) {
        return false
    }

    // If it is an odd number, return false.
    if (num % 2 != 0) {
        return false
    }
    let sum = 0
    let count = 0
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i]
        if (array[0] == array[i]) {
            count = count + 1
        }
    }

    // If all the digits are same, return false.
    if (count == array.length) {
        return false
    }

    // If the total sum is less than 17, return false.
    if (sum < 17) {
        return false
    }

    // Then return true
    return true


}


// console.log(validateCreditcard('9999777788880000'))
// console.log(validateCreditcard('6666666666661666'))
// console.log(validateCreditcard('33211911112'))
// console.log(validateCreditcard('a92332119c011112'))
// console.log(validateCreditcard('4444444444444444'))
// console.log(validateCreditcard('1111111111111110'))
// console.log(validateCreditcard('6666666666666661'))