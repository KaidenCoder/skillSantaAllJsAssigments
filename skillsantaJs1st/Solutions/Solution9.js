// 9. The Temperature Converter Create a function called Celsius to Fahrenheit:

// ● Store a Celsius temperature into a variable.

// ● Convert it to Fahrenheit and output "NN°C is NN°F". Create a function called Fahrenheit to celsius:

// ● Now store a Fahrenheit temperature into a variable.

// ● Convert it to celsius and output "NN°F is NN°C."

function celciusToFahrenheit(temp) {
    return (temp * 1.8) + 32
}

let celcius = 30
let res1 = celciusToFahrenheit(celcius).toFixed()
console.log(celcius + "°C is " + res1 + "°F")



function fahrenheitToCelcius(temp) {
    return (5 / 9) * (temp - 32)
}

let fahren = 84
let res2 = fahrenheitToCelcius(fahren).toFixed(2)
console.log(fahren + "°F is " + res2 + "°C")