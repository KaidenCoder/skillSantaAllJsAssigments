// 5. Write a JavaScript program to add items in an blank array and display the items.

// Sample Screen :

let x = 0
let array = []

function add_element() {
    array.push(document.getElementById("text1").value)
    document.getElementById("text1").value = ""
}

function display_element() {
    let display = "";
    for (let i = 0; i < array.length; i++) {
        display += "Element " + i + " = " + array[i] + "<br/>"
    }
    document.getElementById("elements").innerHTML = display
}