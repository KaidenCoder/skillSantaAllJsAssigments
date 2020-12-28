// 5. Write a JavaScript function to capitalize the first letter of each word in a string

// console.log(capitalize_Words('hi from skillsanta'));

// "Hi From Skillsanta"

function capitalize_Words(str) {
    const words = str.split(" ")

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1)
    }

    return words.join(" ")
}

console.log(capitalize_Words('hi from skillsanta'));

