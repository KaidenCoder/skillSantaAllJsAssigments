// 4. Write a JavaScript program to find the most frequent item of an array.

// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// Sample Output : a ( 5 times )


function mostFrequent(arr) {
    let count = 0
    let start = 1
    let element = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++
            }
            if (start < count) {
                start = count
                element = arr[i]
            }
        }
        count = 0
    }

    console.log(element + " ( " + start + " times ) ")
}

let arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
mostFrequent(arr)