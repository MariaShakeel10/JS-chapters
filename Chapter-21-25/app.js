//1//6
let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "! Welcome!");
//2
let favoriteMobile = prompt("What is your favorite mobile phone model?");
let lengthOfInput = favoriteMobile.length;
document.write("Length of your favorite mobile phone model input is: " + lengthOfInput);
//3
let word = "Pakistani";
let index = word.indexOf("n");
document.write("Index of 'n' in the word 'Pakistani' is: " + index);
//4
let word1 = "Hello World";
let lastIndex = word1.lastIndexOf("l");
document.write("Last index of 'l' in the word 'Hello World' is: " + lastIndex);
//5
let word2 = "Pakistani";
let character = word2.charAt(3);
document.write("Character at 3rd index in the word 'Pakistani' is: " + character);
//7
let city = "Hyderabad";
let newCity = city.replace("Hyder", "Islam");
document.write("Modified city name: " + newCity);
//8
let message = "Ali and Sami are best friends. They play cricket and football together.";
let newMessage = message.replace(/and/g, "&");
document.write("Modified message: " + newMessage);
//9
let str = "472";
let num = Number(str);
document.write("Value: " + str + "<br>");
document.write("Type: " + typeof str);
document.write("Value: " + num + "<br>");
document.write("Type: " + typeof num);
//10
let userInput = prompt("Enter some text:");
let uppercaseText = userInput.toUpperCase();
document.write("Input in capital letters: " + uppercaseText);
//11
let userInput1 = prompt("Enter a string: ");

let titleCaseString = userInput1.toLowerCase().split(' ').map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}).join(' ');

console.log(titleCaseString);
//12
var num1 = 35.36;
var numString = num1.toString().replace('.', '');

document.write(numString);
//13
let username = prompt("Enter your username: ");

let isValid = true;

for (let i = 0; i < username.length; i++) {
    let charCode = username.charCodeAt(i);
    if (charCode === 64 || charCode === 46 || charCode === 44 || charCode === 33) {
        isValid = false;
        break;
    }
}

if (!isValid) {
    alert("Please enter a valid username without special symbols [@ . , !]");
} else {
    alert("Username accepted: " + username);
}
//14
let A = ["cake", "apple pie", "cookie", "chips", "patties"];

let userInput3 = prompt("Enter an item to search: ").toLowerCase(); // Convert user input to lowercase

let found = false;

for (let i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === userInput3) {
        found = true;
        break;
    }
}

if (found) {
    alert("Yes, '" + userInput3 + "' is found in the list.");
} else {
    alert("No, '" + userInput3 + "' is not found in the list.");
}
//15
let password = prompt("Enter your password: ");

let hasAlphabet = false;
let hasNumber = false;
let isValidLength = password.length >= 6;
let startsWithNumber = !isNaN(password.charAt(0)); // Check if the first character is a number

// Check for alphabets and numbers
for (let i = 0; i < password.length; i++) {
    let charCode = password.charCodeAt(i);
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
        hasAlphabet = true;
    } else if (charCode >= 48 && charCode <= 57) {
        hasNumber = true;
    }
}

// Validate password based on requirements
if (!hasAlphabet || !hasNumber || startsWithNumber || !isValidLength) {
    alert("Please enter a valid password that:\n- Contains alphabets and numbers\n- Does not start with a number\n- Is at least 6 characters long");
} else {
    alert("Password accepted.");
}
//16
var university = "University of Karachi";
var universityArray = university.split(' ');

document.write(universityArray);
//17
let userInput6 = prompt("Enter a string: ");

let lastCharacter = userInput6.charAt(userInput.length - 1);

alert("Last character: " + lastCharacter);
//18
let sentence = "The quick brown fox jumps over the lazy dog";
let wordToSearch = "the";
let count = 0;

// Convert both sentence and wordToSearch to lowercase for case-insensitive comparison
let lowerCaseSentence = sentence.toLowerCase();
let lowerCaseWord = wordToSearch.toLowerCase();

// Split the sentence into words
let words = lowerCaseSentence.split(' ');

// Loop through each word and count occurrences of the wordToSearch
for (let i = 0; i < words.length; i++) {
    if (words[i] === lowerCaseWord) {
        count++;
    }
}

console.log("Number of occurrences of '" + wordToSearch + "': " + count);
