// 5. Write a JavaScript function to get the least common multiple (LCM) of two numbers Note :

// According to Wikipedia - A common multiple is a number that is a multiple of two or more integers. The common multiples of 3 and 4 are 0, 12, 24, .... The least common multiple (LCM) of two numbers is the smallest number (not zero) that is a multiple of both.

// Test Data :

// console.log(lcm_two_numbers(3,15)); console.log(lcm_two_numbers(10,15)); Output : 15 30

function lcm_two_numbers(num1, num2) {
    let minNumber = 0
    if (num1 > num2) {
        minNumber = num2
    } else {
        minNumber = num1
    }
    while (minNumber >= 2) {
        if (num1 % minNumber == 0 && num2 % minNumber == 0) {
            return (num1 * num2) / minNumber
        }
        minNumber--
    }
    return (num1 * num2)
}

console.log(lcm_two_numbers(3, 15))
console.log(lcm_two_numbers(10, 15))



