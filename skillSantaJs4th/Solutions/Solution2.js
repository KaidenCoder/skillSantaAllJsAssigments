// 2. Write a merge sort program in JavaScript.

// Sample array : [34,7,23,32,5,62] Sample output : [5, 7, 23, 32, 34, 62]

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let part1 = []
    let part2 = []
    for (let i = 0; i < mid; i++) {
        part1[i] = arr[i]
    }
    let k = 0
    for (let i = mid; i < arr.length; i++) {
        part2[k] = arr[i]
        k++
    }
    mergeSort(part1)
    mergeSort(part2)
    return merge(part1, part2, arr)
}

function merge(arr1, arr2, result) {
    let i = 0, j = 0, k = 0
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result[k] = arr1[i]
            k++
            i++
        }
        else {
            result[k] = arr2[j]
            j++
            k++
        }
    }
    while (i < arr1.length) {
        result[k] = arr1[i]
        k++
        i++
    }
    while (j < arr2.length) {
        result[k] = arr2[j]
        k++
        j++
    }
    return result
}

console.log(mergeSort([34, 7, 23, 32, 5, 62]))
