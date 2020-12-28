// 4. Write a JavaScript function to get the last element of an array.

// Passing a parameter 'n' will return the last 'n' elements of the array. Go to the editor Test Data :

// 1 console.log(last([7, 9, 0, -2])); console.log(last([7, 9, 0, -2],3)); console.log(last([7, 9, 0, -2],6)); Expected Output :

// -2 [9, 0, -2] [7, 9, 0, -2]

function last(arr, n = 0) {

    if (n > 0) {
        return arr.slice(Math.max(arr.length - n, 0))
    } else {
        return arr[arr.length - 1]
    }

}

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));