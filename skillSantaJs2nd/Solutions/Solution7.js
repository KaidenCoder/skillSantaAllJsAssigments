// < !--7. Write a JavaScript program to remove items from a dropdown list. -- >

function removeColor() {
    let i = document.getElementById("colorSelect")
    i.remove(i.selectedIndex)
}