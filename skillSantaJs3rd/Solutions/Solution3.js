// 3. Write a JavaScript program to get the width and height of the window (any time the window is resized).

function getSize() {
    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;

    document.getElementById('text').innerHTML = width + " * " + height
}

getSize()