// 6. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity)
function removeDuplicatesIgnoringCaseSensitive(arr) {

    let uniqueArray = []
    for (let i of arr) {
        if (uniqueArray.indexOf(i) === -1) {
            uniqueArray.push(i)
        }
    }
    console.log(uniqueArray)
}

let arr = [1, 2, 3, 2, 3, 'a', 'A', 'a', 'A'];
removeDuplicatesIgnoringCaseSensitive(arr)
