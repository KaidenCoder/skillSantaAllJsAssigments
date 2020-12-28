// 2. Write a JavaScript for a loop that will iterate from n times. For each iteration, it will check if the current number is odd, even or prime, and display a message on the screen

// a. "0 is even"

// b. "1 is odd"

// c. "2 is even and prime"

// d. “3 is odd and prime”

// e. “4 is even”

//HTML file is index2.html
let z = document.getElementById("text").innerHTML;

function checkNumber(number) {
    for (let i = 0; i <= number; i++) {
        if (i == 0) {
            console.log(i + " is even")
            document.getElementById("text").innerHTML += i + " is even <br>"
        } else if (i == 1) {
            console.log(i + " is odd")
            document.getElementById("text").innerHTML += i + " is odd<br>"
        }
        else if (checkPrime(i) == true) {
            if (checkEven(i) == true) {
                console.log(i + " is even and prime")
                document.getElementById("text").innerHTML += i + " is even and prime<br>"
            } else if (checkOdd(i) == true) {
                console.log(i + " is odd and prime")
                document.getElementById("text").innerHTML += i + " is odd and prime<br>"
            }
        } else if (checkPrime(i) == false) {
            if (checkOdd(i) == true) {
                console.log(i + " is odd")
                document.getElementById("text").innerHTML += i + " is odd<br>"
            } else if (checkEven(i) == true) {
                console.log(i + " is even")
                document.getElementById("text").innerHTML += i + " is even<br>"
            }
        }


    }
}

function checkPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            return false
        }
    }
    return true
}

function checkOdd(i) {
    if (i % 2 != 0) {
        return true
    }
    return false
}

function checkEven(i) {
    if (i % 2 == 0) {
        return true
    }
    return false
}

checkNumber(20)

