//1
function displayCurrentDateTime() {
    var currentDateTime = new Date();
    alert("Current date and time: " + currentDateTime);
}
displayCurrentDateTime();
//2
function greetUser(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    alert("Hello, " + fullName + "!");
}
var firstName =prompt("Enter your firstname");
var lastName = prompt("Enter your lastname");
greetUser(firstName, lastName);
//3
function sum(a,b) {
    document.write(`${a+b}<br>`)
}
let a =prompt("Enter a number")
let b =prompt("Enter a number")
sum(a,b)
//4
function calculate(num1, num2, operator) {
    var result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = "Invalid operator";
    }

    document.write(`"Result: " + ${result} <br>`);
}
var num1 = 10;
var num2 = 5;
var operator = '+';
calculate(num1, num2, operator);
//5
function square(number) {
    return number * number;
}
var num = prompt("Enter  a number");
var squared = square(num);
console.log("Squared:", squared);
//6
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        var result = 1;
        for (var i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}
var number = prompt("Enter a number.");
var factorialResult = factorial(number);
console.log("Factorial of", number, "is:", factorialResult);
//7
function displayCounting(start, end) {
    var output = "";
    for (var i = start; i <= end; i++) {
        output += i + " ";
    }
    document.write(`${output}<br>`);
}
var startNum =prompt("Enter a number.") ;
var endNum = prompt("Enter a number.");
displayCounting(startNum, endNum);
//8
function calculateHypotenuse(base, perpendicular) {
    
    function calculateSquare(side) {
        return side * side;
    }

    var baseSquare = calculateSquare(base);
    var perpendicularSquare = calculateSquare(perpendicular);
    var hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);

    return hypotenuse;
}
var baseLength = prompt("Enter baselength");
var perpendicularLength = prompt("Enter perpendicularlength");
var hypotenuseLength = calculateHypotenuse(baseLength, perpendicularLength);
console.log("Hypotenuse length:", hypotenuseLength.toFixed(2)); 
//9
function calculateRectangleArea() {
    var width = arguments[0];
    var height = arguments[1];
    var area = width * height;
    return area;
}
var widthVar = prompt("Enter width of rectangle");
var heightVar = prompt("Enter height of rectangle");
var areaVar = calculateRectangleArea(widthVar, heightVar);
console.log("Area with variables:", areaVar); 

//10
function isPalindrome(str) {
    var cleanedStr = str.toLowerCase().replace(/[\W_]/g, '');
    var reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}
var testString1 = "madam";
console.log(testString1 + " is palindrome? " + isPalindrome(testString1)); // Output: madam is palindrome? true

var testString2 = "hello";
console.log(testString2 + " is palindrome? " + isPalindrome(testString2)); // Output: hello is palindrome? false
//11
function capitalizeWords(str) {
    var words = str.split(' '); 
    var capitalizedWords = [];

    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        capitalizedWords.push(capitalizedWord);
    }

    return capitalizedWords.join(' '); 
}
var exampleString = 'the quick brown fox';
var result = capitalizeWords(exampleString);
console.log("Original: " + exampleString);
console.log("Capitalized: " + result);
//12
function findLongestWord(str) {
    var words = str.split(' ');
    var longestWord = '';
    var maxLength = 0;

    for (var i = 0; i < words.length; i++) {
        var currentWord = words[i];
        var cleanWordLength = currentWord.replace(/[\W_]/g, '').length;

        if (cleanWordLength > maxLength) {
            maxLength = cleanWordLength;
            longestWord = currentWord;
        }
    }

    return longestWord;
}
var exampleString = 'Web Development Tutorial';
var longestWord = findLongestWord(exampleString);
console.log(longestWord);
//13
function countOccurrences(str, letter) {
    var count = 0;

    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === letter) {
            count++;
        }
    }

    return count;
}
var sampleString = 'JSResourceS.com';
var letterToCount = 'o';
var occurrences = countOccurrences(sampleString, letterToCount);
console.log(occurrences); 
//14
function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    console.log("The circumference is " + circumference.toFixed(2));
}

function calcArea(radius) {
    var area = Math.PI * radius * radius;
    console.log("The area is " + area.toFixed(2));
}
var radius = prompt("Enter radius of a circle");
calcCircumference(radius); 
calcArea(radius); 
