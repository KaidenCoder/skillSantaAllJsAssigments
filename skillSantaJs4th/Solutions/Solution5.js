// 5. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

function removeDuplicates(arr) {
    let res = []
    let obj = {}

    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = 0;
    }
    for (let i in obj) {
        res.push(parseInt(i))
    }
    return res
}

console.log(removeDuplicates([7, 7, 9, 0, 0, 1, 1, -2]));