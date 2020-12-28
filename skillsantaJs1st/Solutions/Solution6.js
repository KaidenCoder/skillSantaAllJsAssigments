// 6. Write a JavaScript function to truncate a string to a certain number of words.

// Test Data:

// console.log(truncate('The quick brown fox jumps over the lazy dog', 4)); Output:

// "The quick brown fox"

function truncate(str, number) {
    const words = str.split(" ")
    let res = ""
    for (let i = 0; i < number - 1; i++) {
        res += words[i] + " "
    }
    res = res + words[number - 1];
    return res
}

console.log(truncate('The quick brown fox jumps over the lazy dog', 4));