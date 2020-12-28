// 3. Write a JavaScript program to sort the items of an array.

// Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ]; Sample Output : -4,-3,1,2,3,5,6,7,8

function sortArray(arr) {
    arr.sort((a, b) => a - b)
    let res = ""
    for (let i = 0; i < arr.length - 1; i++) {
        res = res + arr[i] + ","
    }
    res = res + arr[arr.length - 1]
    console.log(res)
}

let arr = [3, 8, 7, 6, 5, -4, -3, 2, 1];
sortArray(arr)