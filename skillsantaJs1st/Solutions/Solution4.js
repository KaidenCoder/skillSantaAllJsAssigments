// 4. Write a JavaScript function to hide email addresses to protect from unauthorized user

// Test Data:

// console.log(protect_email("eddygrant@example.com"));

// "eddy....@example.com"

//HTML file is index4.html

function protect_email(user) {
    let splitmail = user.split("@")
    let part1 = splitmail[0]
    let len1 = part1.length
    let part11 = part1.substring(0, (len1 - len1 / 2))
    return part11 + "....@" + splitmail[1]
}

console.log(protect_email("eddygrant@example.com"))