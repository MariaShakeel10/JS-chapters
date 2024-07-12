//1
let userInput = prompt("Enter a positive integer:");
let number = parseFloat(userInput);
let roundValue = Math.round(number);
let floorValue = Math.floor(number);
let ceilValue = Math.ceil(number);
document.write("<h2>Number Operations</h2>");
document.write("<p>a. Number: " + number + "</p>");
document.write("<p>b. Round off value: " + roundValue + "</p>");
document.write("<p>c. Floor value: " + floorValue + "</p>");
document.write("<p>d. Ceil value: " + ceilValue + "</p>");
//2
let userInput2 = prompt("Enter a negative integer:");
let number2 = parseFloat(userInput2);
let roundValue2 = Math.round(number2);
let floorValue2 = Math.floor(number2);
let ceilValue2 = Math.ceil(number2);
document.write("<h2>Number Operations</h2>");
document.write("<p>a. Number: " + number2 + "</p>");
document.write("<p>b. Round off value: " + roundValue2 + "</p>");
document.write("<p>c. Floor value: " + floorValue2 + "</p>");
document.write("<p>d. Ceil value: " + ceilValue2 + "</p>");
//3
let userInput3 = parseInt(prompt("Enter a number"))
let absolute = Math.abs(userInput3)
document.write("<p>Absolute value of " + userInput3 + " is " + absolute + "</p>");
//4
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
document.write("<p>The dice rolled: " + rollDice() + "</p>");
document.write("<p>The dice rolled: " + rollDice() + "</p>");
//5
function tossCoin() {
    let randomNum = Math.floor(Math.random() * 2);
    return randomNum < 0 ? "Heads" : "Tails";
}
document.write("<p>The coin landed on: " + tossCoin() + "</p>");
document.write("<p>The coin landed on: " + tossCoin() + "</p>");
//6
let random = Math.floor(Math.random() * 100);
document.write("<p>Random no. between 1 and 100 is: " + random + "</p>");
//7
let weight = parseFloat(prompt("Enter your weight in kgs"))
document.write("<p>The weight of user is  " + weight + "Kgs"+"</p>");
//8
let userInput5 = prompt("Guess the secret number (between 1 and 10):");
let userNumber = parseInt(userInput5);
if (userNumber === secretNumber) {
    document.write("<h2>Congratulations!</h2>");
    document.write("<p>You guessed the secret number " + secretNumber + " correctly!</p>");
  } else {
    document.write("<h2>Sorry!</h2>");
    document.write("<p>Incorrect guess. The secret number was " + secretNumber + ".</p>");
  }
