// 2. Write a JavaScript function to get the difference between two dates in days Test Data :

// console.log(date_diff_indays('04/02/2014', '11/04/2014')); console.log(date_diff_indays('12/02/2014', '11/04/2014')); Output :

// 216 days -28 days

function date_diff_indays(date1, date2) {
    let fstdate = new Date(date1)
    let sndate = new Date(date2)
    let firstNum = Date.UTC(fstdate.getFullYear(), fstdate.getMonth(),
        fstdate.getDate())
    let secondNum = Date.UTC(sndate.getFullYear(), sndate.getMonth(),
        sndate.getDate())
    let difference = Math.floor(secondNum - firstNum)

    // Dividing by 1 second = 1000 millisecond, minute, hour, and a day
    return difference / (1000 * 60 * 60 * 24) + " days"
}

console.log(date_diff_indays('04/02/2014', '11/04/2014'));
console.log(date_diff_indays('12/02/2014', '11/04/2014'));