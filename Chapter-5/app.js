// Q1
let num1 = prompt("Enter your first no. to add");
let num2 = prompt("Enter your second no. to add");
num1 = Number.parseInt(num1)
num2 = Number.parseInt(num2)
let sum = num1 + num2
document.write(`<p>Sum of ${num1} and ${num2} is ${sum}.</p>`)


// Q2
let num3 = prompt("Enter your first no. to subract");
let num4 = prompt("Enter your second no. to subract");
num3 = Number.parseInt(num3)
num4 = Number.parseInt(num4)
let sum1 = num3 - num4
document.write(`<p>Subraction of ${num3} and ${num4} is ${sum1}.</p>`)

let num5 = prompt("Enter your first no. to divide");
let num6 = prompt("Enter your second no. to divide");
num5 = Number.parseInt(num5)
num6 = Number.parseInt(num6)
let sum2 = num5 / num6
document.write(`<p>Division of ${num5} and ${num6} is ${sum2}.</p>`);

let num7 = prompt("Enter your first no. to Multiply");
let num8 = prompt("Enter your second no. to Multiply");
num7 = Number.parseInt(num7)
num8 = Number.parseInt(num8)
let sum3 = num7 * num8
document.write(`<p>Multiply of ${num7} and ${num8} is ${sum3}.</p>`)

let num9 = prompt("Enter your first no. to modulus");
let num10 = prompt("Enter your second no. to modulus");
num9 = Number.parseInt(num9)
num10 = Number.parseInt(num10)
let sum4 = num9 % num10
document.write(`<p>Modulus of ${num9} and ${num10} is ${sum4}.</p>`);

// Q3
let myNum = +prompt("Enter a no.")
document.write(`<p>Value after variable declaration is: ${myNum}</p>`)
let initial = myNum
document.write(`<p>Initial value:. ${initial}</p>`)
let increment = initial + 1
document.write(`<p>Value after increment is: ${increment}</p>`)
let add = increment + 7
document.write(`<p>Value after addition is:${add}</p>`)
let decrement = add - 1
document.write(`<p>Value after decrement is: ${decrement}</p>`)
let remainder = decrement / 3
document.write(`<p>The remainder is : ${remainder}</p>`);

// Q4
let ticketPrice = 600
let noOfPeople = +prompt("Enter the amount of tickets you want")
let totalCost = ticketPrice * noOfPeople
document.write(`<p>Total cost to buy ${noOfPeople} tickets for a movie is ${totalCost}.</p>`);

// Q5
let numberTable = +prompt("Enter a no. to get it's table")
document.write(`<h1>Table of ${numberTable} is</h1>`)
let i = 0
for (let i = 1; i <= 10; i++) {
    let result = i * numberTable;
    document.write(`<p>${numberTable} x ${i} = ${result}</p>`);
}

// Q6

let fahrenheit =+prompt("Enter temperature in <sup>o</sup>C")
let conver2=(fahrenheit-32)*5/9
document.write(`<p>${fahrenheit}<sup>o</sup>C is ${conver2}<sup>o</sup>F</p>`)
let celsius =+prompt("Enter temperature in <sup>o</sup>F")
let conver1=(celsius-9/5)+32
document.write(`<p>${celsius}<sup>o</sup>F is ${conver1}<sup>o</sup>C</p>`);

// Q7
let ppOf1 =650
let ppOf2 =350
let qtyOf1 =3
let qtyOf2 =4
let shippingCharge =100
let total =(ppOf1*qtyOf1)+(ppOf2*qtyOf2)+shippingCharge

document.write(`<p>Price of item 1 is ${ppOf1}</p>`)
document.write(`<p>Quantity of item 1 is ${qtyOf1}</p>`)
document.write(`<p>Price of item 2 is ${ppOf2}</p>`)
document.write(`<p>Quantity of item 2 is ${qtyOf2}</p>`)
document.write(`<p>Shipping charges is ${shippingCharge}</p>`)
document.write(`<p>Total amount is ${total}</p>`)

// Q8
document.write(`<h1>Marksheet</h1>`)

let totalMarks =500
let obtainedMarks =+prompt("enter your marks out of 500")
let percent=(obtainedMarks/totalMarks)*100
document.write(`<p>Total Marks ${totalMarks}</p>`)
document.write(`<p>Marks obtained ${obtainedMarks}</p>`)
document.write(`<p>Percentage is ${percent}%</p>`)

//Q9
let dollars=+prompt("Amount of dollars USD")
let riyal=+prompt("Amount of Riyal SAR")
let pkrUSD =104.80
let pkrSAR =28
let totalPKR = (dollars*pkrUSD)+(riyal*pkrSAR)

document.write(`<p>Total currrency in PKR is: ${totalPKR}Rs</p>`)

//Q10
let newNum =+prompt("Enter a random no.")
let addition =5
let multi =10
let division =2
let myNewNum = newNum+addition*multi/division
document.write(`<p>${myNewNum}</p>`)

//Q11
