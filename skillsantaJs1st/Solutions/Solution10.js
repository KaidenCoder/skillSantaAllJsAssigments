// 10. Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.


function lowerToUpperAndUpperToLower(str) {
    let newWord = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i].toLowerCase()) {
            newWord[i] = str[i].toUpperCase()
        } else if (str[i] == str[i].toUpperCase()) {
            newWord[i] = str[i].toLowerCase()
        } else if (str[i] == " ") {
            newWord[i] = " "
        }
    }

    return newWord.join("")
}

console.log(lowerToUpperAndUpperToLower("Hello WoRld"))