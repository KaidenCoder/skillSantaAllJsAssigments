// 3. Write a JavaScript program to construct the following pattern, using a nested for loop.

// ***** 
// **** 
// *** 
// ** 
// *

//HTML file is index3.html

function starPattern(number) {
    for (let i = number; i > 0; i--) {
        let res = ""
        for (j = 0; j < i; j++) {
            res = res + "*"
        }
        console.log(res)
    }
}

starPattern(5)