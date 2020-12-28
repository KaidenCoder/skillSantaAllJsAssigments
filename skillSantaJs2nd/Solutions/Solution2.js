// 2. Write a simple JavaScript program to join all elements of the following array into a string.

// Sample array : myColor = ["Red", "Green", "White", "Black"]; Expected Output :

// "Red,Green,White,Black" "Red,Green,White,Black" "Red+Green+White+Black"

function joinArray(arr) {
    let finalRes = []
    let res = '"';
    for (let i = 0; i < arr.length - 1; i++) {
        res = res + arr[i] + ","
    }
    res = res + arr[arr.length - 1]
    res = res + '"'
    finalRes.push(res)
    finalRes.push(res)
    let res1 = '"';
    for (let i = 0; i < arr.length - 1; i++) {
        res1 = res1 + arr[i] + "+"
    }
    res1 = res1 + arr[arr.length - 1]
    res1 = res1 + '"'
    finalRes.push(res1)
    for (let i = 0; i < finalRes.length; i++) {
        console.log(finalRes[i])
    }
}

let myColor = ["Red", "Green", "White", "Black"]
joinArray(myColor)