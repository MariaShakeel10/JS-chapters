//1
let arr1 = [[], [], []]
//2
arr1[0][0] = 0
arr1[0][1] = 1
arr1[0][2] = 2
arr1[0][3] = 3
arr1[1][0] = 1
arr1[1][1] = 0
arr1[1][2] = 1
arr1[1][3] = 2
arr1[2][0] = 2
arr1[2][1] = 1
arr1[2][2] = 0
arr1[2][3] = 1
document.write(`${arr1[0]}<br>`);
document.write(`${arr1[1]}<br>`);
document.write(`${arr1[2]}<br>`);
//3
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
//4
let numToMultiply = parseInt(prompt("Enter a no. to show its multiplication table"))
let numToStop = parseInt(prompt(`Enter the length of multiplication table`))
for (let i = 0; i <= numToStop; i++) {
    document.write(`<p>${numToMultiply} X ${i} = ${numToMultiply * i} </p>`)
}
//5
let fruits = ["apple", "banana", "mango", "orange","strawberry"]
for (let i = 0; i < fruits.length; i++) {
    document.write(`<p>${fruits[i]}</p>`)

    document.write(`<p>Element at index ${i} is ${fruits[i]}</p>`)
    
}
//6
function generateSeries() {
    // a. Counting: 1 to 15
    document.write("<p>a. Counting: ");
    for (let i = 1; i <= 15; i++) {
      document.write(i);
      if (i !== 15) {
        document.write(", ");
      }
    }
    document.write("</p>");

    // b. Reverse counting: 10 to 1
    document.write("<p>b. Reverse counting: ");
    for (let i = 10; i >= 1; i--) {
      document.write(i);
      if (i !== 1) {
        document.write(", ");
      }
    }
    document.write("</p>");

    // c. Even numbers: 0 to 20
    document.write("<p>c. Even: ");
    for (let i = 0; i <= 20; i += 2) {
      document.write(i);
      if (i !== 20) {
        document.write(", ");
      }
    }
    document.write("</p>");

    // d. Odd numbers: 1 to 19
    document.write("<p>d. Odd: ");
    for (let i = 1; i <= 19; i += 2) {
      document.write(i);
      if (i !== 19) {
        document.write(", ");
      }
    }
    document.write("</p>");

    // e. Series in multiples of 2k: 2k to 20k
    document.write("<p>e. Series: ");
    for (let i = 1; i <= 10; i++) {
      document.write(2 * i + "k");
      if (i !== 10) {
        document.write(", ");
      }
    }
    document.write("</p>");
  }
  generateSeries()
//7
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInp = prompt("Enter a bakery item ");
userInp = userInp.toLowerCase();
let found = false;

for (let i = 0; i < A.length; i++) {
    if (A[i] === userInp) {
        found = true;
        break; 
    }
}

if (found) {
    document.write(`${userInp} is available at our bakery.`);
} else {
    document.write(`${userInp} is not available at our bakery.`);
}

    

//8
const a = [24, 53, 78, 91, 12];

let maxNum = A[0];

for (let i = 1; i < a.length; i++) {
  if (a[i] > maxNum) {
    maxNum = a[i];
  }
}

document.write(`${maxNum}`);
//9
let B = [24, 53, 78, 91, 12];

// Initialize minNum with the first element of the array
let minNum = B[0];

// Iterate through the array starting from the second element
for (let i = 1; i < B.length; i++) {
  if (B[i] < minNum) {
    minNum = B[i];
  }
}

console.log(`The smallest number in the array is: ${minNum}`);
//10
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        document.write(`${i}`)
    }
  }
  
