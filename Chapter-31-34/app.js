//1
document.write(`${new Date()}`);
//2
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const currentDate = new Date();
const currentMonth = months[currentDate.getMonth()];
alert(currentMonth);
//3
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const currentDay = days[currentDate.getDay()];
alert(currentDay);
//4
const dayOfWeek = currentDate.getDay();
if (dayOfWeek === 0 || dayOfWeek === 6) {
    alert("It's Fun day");
}
//5
const date = currentDate.getDate()
if (date < 16) {
    document.write(`First Fifteen Days of month <br>`)
} else {
    document.write(`Last Days of Month <br>`)
}
//6
document.write(`Current Date: ${currentDate} <br>`)
document.write(`Elapsed Minutes Sice January 1st, 1970: ${currentDate.getTime()} <br>`)
document.write(`Elapsed Minutes since January : ${currentDate.getTime() / (1000 * 60)} <br>`)
//7
const hours = currentDate.getHours();
if (hours < 12) {
    alert("It's AM");
} else {
    alert("It's PM");
}
//8
const date2020 = new Date(2020, 11, 0);
const laterDate = date2020;
document.write(`${laterDate} <br>`);
//9
const ramadanStartDate = new Date('2015-06-18');
const differenceInTime = currentDate.getTime() - ramadanStartDate.getTime();
const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
alert(`Days past since 1st Ramadan: ${differenceInDays}`);
//10
const referenceDate = new Date();
const beginningOf2015 = new Date('2015-01-01');
const differenceInSeconds = Math.floor((referenceDate.getTime() - beginningOf2015.getTime()) / 1000);
document.write(`Seconds elapsed since the beginning of 2015: ${differenceInSeconds}`);
//11
const currentHours = currentDate.getHours();
currentDate.setHours(currentHours + 1);
document.write(currentDate);
//12
currentDate.setFullYear(currentDate.getFullYear() - 100);
alert(currentDate);
//13
const age = prompt("Please enter your age:");
const currentYear = new Date().getFullYear();
const birthYear = currentYear - parseInt(age);
document.write(`Your birth year is: ${birthYear}`);
//14
const customerName = prompt("Enter customer name:");
const currentMonth2 = new Date().toLocaleString('default', { month: 'long' });
const numberOfUnits = parseFloat(prompt("Enter number of units:"));
const chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
const latePaymentSurchargeRate = 0.1; // 10% late payment surcharge

const netAmountPayable = numberOfUnits * chargesPerUnit;
const latePaymentSurcharge = netAmountPayable * latePaymentSurchargeRate;
const grossAmountPayable = netAmountPayable + latePaymentSurcharge;

// Round amounts to 2 decimal places
const roundedNetAmountPayable = netAmountPayable.toFixed(2);
const roundedLatePaymentSurcharge = latePaymentSurcharge.toFixed(2);
const roundedGrossAmountPayable = grossAmountPayable.toFixed(2);

// Display the bill details in the browser
document.write(`<h2>K-Electric Bill</h2>
               <p>Customer Name: ${customerName}</p>
               <p>Current Month: ${currentMonth2}</p>
               <p>Number of units: ${numberOfUnits}</p>
               <p>Charges per unit: ${chargesPerUnit}</p>
               <p>Net Amount Payable (within Due Date): ${roundedNetAmountPayable}</p>
               <p>Late Payment Surcharge: ${roundedLatePaymentSurcharge}</p>
               <p>Gross Amount Payable (after Due Date): ${roundedGrossAmountPayable}</p>`);
