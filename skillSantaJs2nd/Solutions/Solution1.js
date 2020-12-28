// 1. Create a Digital Clock using html, css , JS obviously, And add two buttons below the clock to toggle timing between 24-12 hour. Set AM/PM depending on the hour value. The Date object works in 24-hour format so we change hour back to 1 when it gets larger than 12. The AM/PM also changes according to that. And if hour, min or seconds are less than 10 then add 0 before that example:

// 9:10:6 ------> 09:10:06

function showTime() {
    let date = new Date()

    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let session = "PM"
    let oh = 0;

    if (h > 12) {
        session = "PM"
        oh = h - 12
        if (oh < 10) {
            oh = "0" + oh
        }
    }
    if (h < 12) {
        session = "AM"
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s

    let time = oh + ":" + m + ":" + s + " " + session
    document.getElementById("MyClockDisplay").innerText = time
}

setInterval(showTime, 1000)