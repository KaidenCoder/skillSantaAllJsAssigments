// 8. Write a javascript function to print the Fibonacci series of n times.

function fibonacci(number) {
    let start1 = 0
    let start2 = 1
    let nextterm;
    for (i = 1; i <= number; i++) {
        console.log(start1) // Print statement
        nextterm = start1 + start2
        start1 = start2
        start2 = nextterm
    }
}

fibonacci(9)