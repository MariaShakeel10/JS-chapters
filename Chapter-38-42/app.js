//1
function power(a, b) {
    return Math.pow(a, b);
}
console.log(power(2, 3));
//2
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return "is leap year";
    } else {
        return "is not aleap year";
    }
}
var year = prompt("Enter year")
console.log(isLeapYear(year));
//3
function calculateArea(a, b, c) {
    let s = calculateSemiPerimeter(a, b, c);
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}

function calculateSemiPerimeter(a, b, c) {
    return (a + b + c) / 2;
}
let area = calculateArea(2, 5, 6);
console.log("Area of the triangle:", area);
//4
function mainFunction(subject1, subject2, subject3) {
    let avg = calculateAverage(subject1, subject2, subject3);
    let percent = calculatePercentage(subject1, subject2, subject3);

    console.log("Average marks:", avg);
    console.log("Percentage:", percent);
}

function calculateAverage(sub1, sub2, sub3) {
    return (sub1 + sub2 + sub3) / 3;
}

function calculatePercentage(sub1, sub2, sub3) {
    let totalMarks = sub1 + sub2 + sub3;
    let totalSubjects = 3;
    return (totalMarks / (totalSubjects * 100)) * 100;
}
let marksSubject1 = 85;
let marksSubject2 = 90;
let marksSubject3 = 75;
mainFunction(marksSubject1, marksSubject2, marksSubject3);
//5
function customIndexOf(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
}
let sentence = "Hello, world!";
let character = 'o';
console.log(customIndexOf(sentence, character)); // Output: 4 (index of the first 'o' in "Hello, world!")
//6
function deleteVowels(sentence) {
    const vowels = "aeiouAEIOU";
    let result = "";
    for (let i = 0; i < sentence.length; i++) {
        if (vowels.indexOf(sentence[i]) === -1) {
            result += sentence[i];
        }
    }

    return result;
}
let inputSentence = "Hello, how are you today?";
let sentenceWithoutVowels = deleteVowels(inputSentence);
console.log("Sentence without vowels:", sentenceWithoutVowels);
//7
function countSuccessiveVowels(text) {
    text = text.toLowerCase();
    let count = 0;

    for (let i = 0; i < text.length - 1; i++) {
        let currentChar = text[i];
        let nextChar = text[i + 1];

        switch (currentChar) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                switch (nextChar) {
                    case 'a':
                    case 'e':
                    case 'i':
                    case 'o':
                    case 'u':
                        count++;
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    }

    return count;
}

let sentence1 = "Pleases read this application and give me gratuity";
let occurrences = countSuccessiveVowels(sentence1);
console.log("Number of occurrences of successive vowels:", occurrences);
//8
function convertDistance(distance, unit) {
    switch (unit) {
        case 'meters':
            return distance * 1000;
        case 'feet':
            return distance * 3280.84;
        case 'inches':
            return distance * 39370.1;
        case 'centimeters':
            return distance * 100000;
        default:
            return -1;
    }
}
let distanceInKm = prompt("Enter distance in Km");

console.log("Distance in meters:", convertDistance(distanceInKm, 'meters')); 
console.log("Distance in feet:", convertDistance(distanceInKm, 'feet'));          
console.log("Distance in inches:", convertDistance(distanceInKm, 'inches'));     
//9
function calculateOvertimePay(hoursWorked) {
    const overtimePayRate = 12.00;  
    let overtimePay = 0.0;
    if (hoursWorked > 40) {
        let overtimeHours = hoursWorked - 40;
        overtimePay = overtimeHours * overtimePayRate;
    }
    return overtimePay.toFixed(2); 
}
let hours = prompt("Enter the no. of hours you worked for");
let pay = calculateOvertimePay(hours);
console.log(`Overtime pay is Rs. ${pay}`);
//10
function calculateCurrencyNotes(amountInHundreds) {
    let amount = amountInHundreds * 100;
    let notes100 = 0;
    let notes50 = 0;
    let notes10 = 0;
    notes100 = Math.floor(amount / 100);
    amount = amount % 100;
    
    notes50 = Math.floor(amount / 50);
    amount = amount % 50;
    
    notes10 = Math.floor(amount / 10);
    amount = amount % 10;
    console.log(`Number of 100 Rs. notes: ${notes100}`);
    console.log(`Number of 50 Rs. notes: ${notes50}`);
    console.log(`Number of 10 Rs. notes: ${notes10}`);
}
let amountInHundreds = prompt("Enter your amount");
calculateCurrencyNotes(amountInHundreds);
