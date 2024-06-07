//Q1
let user1Inp = prompt("Enter any no. or alphabet");
if (user1Inp.charCodeAt(0) >= 65 && user1Inp.charCodeAt(0) <= 90) {
    alert(user1Inp + " Is uppercase letter");
}
else if (user1Inp.charCodeAt(0) >= 97 && user1Inp.charCodeAt(0) <= 122) {
    alert(user1Inp + " Is lowercase letter");
}
else {
    alert(user1Inp + " It's a no.");
}

//Q2
let user2Inp = +prompt("Enter 1 st no.");
let user3Inp = +prompt("Enter 2 st no.");
if (user2Inp < user3Inp) {
    document.write(`<p>${user3Inp} is greater</p>`)
}
else if (user2Inp > user3Inp) {
    document.write(`<p>${user2Inp} is greater</p>`)

}
else {
    document.write(`<p>${user2Inp} = ${user3Inp}</p>`)

}

//Q3
let user4Inp = +prompt("Enter a no.");
if (user4Inp > 0) {
    alert("It's a positive number")
} else if (user4Inp < 0) {
    alert("It's a negative number")
}
else {
    alert("Zero no.")
}

//Q4
let user5Inp = prompt("Enter a letter")
let isVowel;
if (user5Inp == "a" || user5Inp == "e" || user5Inp == "i" || user5Inp == "o" || user5Inp == "u" || user5Inp == "A" || user5Inp == "E" || user5Inp == "I" || user5Inp == "O" || user5Inp == "U") {
    isVowel = true;
} else {
    isVowel = false;
}
alert(isVowel)

//Q5
let userPassword = prompt("Enter a password")

if (!userPassword) {
    alert("Please enter your password")
}
let userConfirmPassword = prompt("Confirm password")
if (userPassword == userConfirmPassword) {
    alert("Correct! The password you entered matches the original password.")
} else {
    alert("Incorrect password")
}

// Q6
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}

//Q7
let a = new Date()
let time = a.getHours()
if (time>=0 && time<12) {
    alert("Good Morning")
}
 else if (time>=12 && time<17) {
    alert("Good After Noon")
}
else if (time>=17 && time<21) {
    alert("Good After Noon")
}
 else {
   alert("Good Night") 
}