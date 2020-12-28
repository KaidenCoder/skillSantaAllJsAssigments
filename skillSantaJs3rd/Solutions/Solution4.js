// 4. Write a JavaScript program to find the Armstrong numbers of 3 digits.

// Go to the editor Note: An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 =

// 371.

function armstrong3digitnumber() {
    for (let i = 1; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            for (let k = 0; k < 10; k++) {
                let armstrong = (i * i * i) + (j * j * j) + (k * k * k)
                let number = (100 * i) + (10 * j) + k
                if (armstrong == number) {
                    console.log(number)
                }
            }
        }
    }
}

armstrong3digitnumber()