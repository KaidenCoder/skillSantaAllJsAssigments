// 1. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.

// a. Sample numbers : 0, -1, 4

// b. Output : 4, 0, -1


//HTML file is index.html
function sort(numbers) {
    return numbers.sort((a, b) => b - a)

}

let res = sort([0, -1, 4])
alert(res)

