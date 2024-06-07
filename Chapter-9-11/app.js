//Q1
let userCity = (prompt("Enter your city"));
if (userCity == "karachi") {
    document.write(`Welcome to city of lights.`)
} else {
    document.write(`<p>Welcome to ${userCity}</p>`)
}

//Q2
let gender = prompt("Enter your gender");
if (gender == "male") {
    document.write(`<p>Good morning sir</p>`)
} else {
    document.write(`<p>Good Morning mam</p>`)
}

//Q3
let signal = prompt("Enter traffic signal color");
if (signal == "red") {
    document.write("<p>Must Stop</p>")
}
else if (signal == "yellow") {
    document.write("<p>Ready to move</p>")
}
else {
    document.write("<p>Move now</p>")
}

//Q4
let fuel = +prompt("Enter your vehicle fuel's");
if (fuel <= 0.25) {
    document.write("<p>Please refill fuel in your car</p>")
}
else {
    document.write("<p>Ready to move</p>")
}

//Q5
//a t
var a = 4
if (++a === 5) {
    alert("given condition for variable a is true");
}
//b f
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
//c
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}//f
if (c === 13) {
    alert("condition 2 is true");
}//t
if (++c < 14) {
    alert("condition 3 is true");
}//f
if (c === 14) {
    alert("condition 4 is true");
}//t
//d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
//e
if (true) {
    alert("True");
}
//f
if ("car" < "cat") {
    alert("car is smaller than cat");
}

//Q6
console.log("Student Result");
//..................................... object
const subjects = {
    "english": +prompt("Enter your marks"),
    "science": +prompt("Enter your marks"),
    "maths": +prompt("Enter your marks")
};

//.....................................calculations
let totalMarks = (subjects["english"] + subjects["maths"] + subjects["science"]);
let percent = (totalMarks / 300 * 100);

// ..................................grade
var grade;
var remarks;

if (percent >= 80) {
    grade = "A+"
    remarks = "Excellent"
}
else if (percent >= 70) {
    grade = "A"
    remarks = "Good"
}
else if (percent >= 60) {
    grade = "B"
    remarks = "You need to improve"
}
else {
    grade = "Fail"
    remarks = "Sorry"
}

// ...................result

document.write(`<p>Obtained Marks: ${totalMarks} </p>`);
document.write(`<p> Total Marks: 300</p>`);
document.write(`<p> Percentage: ${percent.toFixed(2)} </p>`);
document.write(`<p> Grade: ${grade}</p>`);

//Q7
let secretNum = 7
let userNum = +prompt("Enter a no. range(1-10)")
if (secretNum === userNum) {
    document.write(`Bingo!Correct`)
}
else if (secretNum === ++userNum) {
    document.write(`<p>Close enough to the correct answer`)
}
else {
    document.write(`<p>Try Again </p>`)
}

//Q8
let newUserNum = +prompt("Enter a no.")
let calculate = newUserNum / 3
if (0 === calculate) {
    document.write(`<p>Your no. is divisible by `)
}
else {
    document.write(`<p>your no. isn't divisible by `)
}

//Q9
let userInp1 = +prompt("Enter a no.")
let num1 = userInp1 / 2
if (0 === num1) {
    document.write(`<p>even no `)
}
else {
    document.write(`<p>odd no. </p>`)
}

//Q10
let userInp = prompt(`Enter your area's temperature in celsius(0-39)`);
let userTemp = Number.parseInt(userInp);
let tempObj = [
    { "max": 40, "min": 33, "condition": "Heat Wave", "image": './images/sunny.png' },
    { "max": 32, "min": 27, "condition": "Very Hot", "image": './images/sunny.png' },
    { "max": 26, "min": 23, "condition": "Hot", "image": './images/sunny.png' },
    { "max": 22, "min": 16, "condition": "Room Temprature", "image": './images/sunny.png' },
    { "max": 15, "min": 11, "condition": "Warm", "image": './images/cloudy.png' },
    { "max": 10, "min": 5, "condition": "Mild", "image": './images/cloudy.png' },
    { "max": 4, "min": 0, "condition": "Cold", "image": './images/snow.png' },
];

function weatherChecker(temperature) {
    for (let range of tempObj) {
        if (temperature >= range.min && temperature <= range.max) {
            return range;
        }
    }
    return 0;
};

let weatherInfo = weatherChecker(userTemp);

if (weatherInfo) {
    let report1 = `<div class="card mt-5 m-auto my-card" style="width: 18rem;">
<img src="${weatherInfo.image}" class="card-img-top" alt="Weather pic">
<div class="card-body">
  <h5 class="card-title text-center">Weather Report</h5>
  <p class="card-text text-center">Weather ${weatherInfo.condition}</p>
  <p class="card-text text-center">Temperature: ${userInp}Celsius</p>
</div>
</div>`
    document.write(report1)
}
else {
    let report2 = `<div class="card mt-5 m-auto my-card" style="width: 18rem;">
<img src="./images/emoji.png" class="card-img-top" alt="...">
<div class="card-body text-center">
  <p class="card-text text-center">PLease enter a valid Temperature</p>
</div>
</div>`
    document.write(report2)
};

//Q11
let firstNum = +prompt("Enter first no.")
let secondNum = +prompt("Enter second no.")
let addResult = firstNum + secondNum
let subResult = firstNum - secondNum
let multiResult = firstNum * secondNum
let divideResult = firstNum / secondNum
let modulusResult = firstNum % secondNum
if (addResult) {
    document.write(`<p>${addResult}</p>`)
}
if (subResult) {
    document.write(`<p>${subResult}</p>`)
}
if (multiResult) {
    document.write(`<p>${multiResult}</p>`)
}
if (addResult) {
    document.write(`${addResult}</p>`)
} if (divideResult) {
    document.write(`<p>${divideResult}`)
}
if (modulusResult) {
    document.write(`<p>${modulusResult}</p>`)
}