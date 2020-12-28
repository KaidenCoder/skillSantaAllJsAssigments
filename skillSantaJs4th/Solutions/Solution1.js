// 1. Javascript to calculate user's age, based on DOB, check age eligibility, & provide validation alert

// A major goal of our recruitment survey is to identify users who are between the ages of 14-24 (target population) and those who are not (not eligible for our study). Currently, we ask users for their date of birth (MM/DD/YYYY) and would like to use JS to:

// ● Calculate age, based on the current date

// ● Determine if the age is within our target range (14-24)

// ● Provide a validation alert to the users AND/OR categorize users using embedded data in the categories of eligible/ineligible based on age

function date_diff_inyears(date2) {
    let fstdate = new Date()
    let sndate = new Date(date2)
    let firstNum = Date.UTC(fstdate.getFullYear(), fstdate.getMonth(),
        fstdate.getDate())
    let secondNum = Date.UTC(sndate.getFullYear(), sndate.getMonth(),
        sndate.getDate())
    let difference = Math.floor(firstNum - secondNum)

    // Dividing by 1 second = 1000 millisecond, minute, hour, a day, and a year
    let difInYears = Math.floor(difference / (1000 * 60 * 60 * 24 * 365))
    if (difInYears > 13 && difInYears < 25) {
        alert("You are eligible")
    } else {
        alert("You are not eligible")
    }
    // return difInYears
}

// date_diff_indays('11/21/1994')
date_diff_inyears('11/04/2000')