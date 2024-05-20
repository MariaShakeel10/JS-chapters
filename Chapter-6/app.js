//Q1
let a = +prompt("enter a number")
document.write(`<p>The value of a is:${a}</p>`)
document.write(`<p>...............................</p>`)
let b = ++a
document.write(`<p>The value of ++a is ${b}</p>`)
document.write(`<p>Now the value of a is ${a}</p>`)
let c = a++
document.write(`<p>The value of a++ is ${c}</p>`)
document.write(`<p>Now the value of a is ${a}</p>`)
let d = --a
document.write(`<p>The value of --a is ${d}</p>`)
document.write(`<p>Now the value of a is ${a}</p>`)
let e = a--
document.write(`<p>The value of a-- is ${e}</p>`)
document.write(`<p>Now the value of a is ${a}</p>`)

//Q2
let f = 2
let g = 1
document.write(`<p>a is${f}</p>`)
document.write(`<p>b is${g}</p>`)
let two1 = --f
let two2 = --f - --g
let two3 = --f - --g + ++g
let two4 = --f - --g + ++g + g--
document.write(`<p>--f : ${two1}</p>`)
document.write(`<p>--f - --g : ${two2}</p>`)
document.write(`<p> --f - --g + ++g : ${two3}</p>`)
document.write(`<p>--f - --g + ++g + g-- : ${two4}</p>`)
document.write(`<p>Result is : ${two4}</p>`)

//Q3
let userName = prompt("enter your name")
alert(`hello ${userName}`)
document.write(`<p>Hello ${userName} welcome to my website</p>`)

//Q5
let numberTable = +prompt("Enter a no. to get it's table", 5)
document.write(`<h1>Table of ${numberTable} is</h1>`)
let i = 0
for (let i = 1; i <= 10; i++) {
    let result = i * numberTable;
    document.write(`<p>${numberTable} x ${i} = ${result}</p>`);
}

//Q6
let sub1 = prompt("enter your subject")
let sub2 = prompt("enter your subject")
let sub3 = prompt("enter your subject")
let totalMarks = 100
let sub1Marks = +prompt(`enter your ${sub1} marks`)
let sub2Marks = +prompt(`enter your ${sub2} marks`)
let sub3Marks = +prompt(`enter your ${sub3} marks`)

let sub1Percent = sub1 / total * 100
let sub2Percent = sub2 / total * 100
let sub3Percent = sub3 / total * 100

let total = 100 * 3
let obtMarks = sub1Marks + sub2Marks + sub3Marks
let totalPercent = obtMarks/total*100

document.write(`<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th>Percentage<th></th></tr><tr><td>${sub1}</td><td>${totalMarks}</td><td>${sub1Marks}</td><td>${sub1Percent}%</td></tr><tr><td>${sub2}</td><td>${totalMarks}</td><td>${sub2Marks}</td><td>${sub2Percent}%</td></tr><tr><td>${sub3}</td><td>${totalMarks}</td><td>${sub3Marks}</td><td>${sub3Percent}%</td></tr><tr><td></td><th>${total}</th><th>${obtMarks}</th><th>${totalPercent}%</th></tr></table>`)
