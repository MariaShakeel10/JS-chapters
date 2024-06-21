let fName = prompt("Enter your Name");
let result = "";

for (let i = 0; i < fName.length; i++) {
    if (i == 0 || fName[i - 1] == " ") {
        result += fName[i].toUpperCase()
    }
    else {
        result += fName[i].toLowerCase()
    }
}
console.log(result);