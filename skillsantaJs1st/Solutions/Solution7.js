// 7. Write a JavaScript function to find a word within a string.

// Test Data :

// console.log(search_word('The quick brown fox', 'fox')); console.log(search_word('aa, bb, cc, dd, aa', 'aa')); Output :

// "'fox' was found 1 times."

// "'aa' was found 2 times."

function search_word(str, ch) {
    let str2 = str.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')
    const words = str2.split(" ")
    let count = 0
    for (let i = 0; i < words.length; i++) {
        if (words[i] == ch) {
            count = count + 1
        }
    }
    let res = ch + " was found " + count + " times."
    return res
}

console.log(search_word('aa, bb, cc, dd, aa', 'aa'));