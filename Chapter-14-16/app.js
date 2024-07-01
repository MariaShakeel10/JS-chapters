//1
let studentsName = [];
//2

//3
let alphabets = ["a", "b", "c"]
//4
let num = [1, , 2, 3, 4, 5]
//5
let boolean = [true, false]
//6
let mixedArr = ["abc", 2, 3, true]
//7
let educated = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.PJIL", "PhD"]
document.write(`Qualifications`)
for (let i = 0; i < educated.length; i++) {
    document.write(educated[i])

}
//8
studentsName[0] = prompt("Enter your name student 1")
studentsName[1] = prompt("Enter your name student 2")
studentsName[2] = prompt("Enter your name student 3")
let studentsMarks = []
studentsMarks[0] = parseFloat(prompt("Enter student 1 marks"))
studentsMarks[1] = parseFloat(prompt("Enter student 2 marks"))
studentsMarks[2] = parseFloat(prompt("Enter student 3 marks"))
let totalMarks0 = (studentsMarks[0] / 500) * 100
let totalMarks1 = (studentsMarks[1] / 500) * 100
let totalMarks2 = (studentsMarks[2] / 500) * 100
document.write(`<p>Score of ${studentsName[0]} is ${studentsMarks[0]}.Percentage:${totalMarks0}</p>`)
document.write(`<p>Score of ${studentsName[1]} is ${studentsMarks[1]}.Percentage:${totalMarks1}</p>`)
document.write(`<p>Score of ${studentsName[2]} is ${studentsMarks[2]}.Percentage:${totalMarks2}</p>`)
//9
// Step 1: Initialize an array with color names
let colors = ["Red", "Green", "Blue"];

// Step 2: Display the array elements
console.log("Initial Array:", colors);

// Step 3a: Ask the user to add a color to the beginning
let colorToAddAtBeginning = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAddAtBeginning);

// Step 3b: Ask the user to add a color to the end
let colorToAddAtEnd = prompt("Enter a color to add to the end:");
colors.push(colorToAddAtEnd);

// Step 3c: Add two more colors to the beginning
colors.unshift("Purple", "Yellow");

// Display updated array after steps 3a, 3b, and 3c
console.log("Array after adding colors:", colors);

// Step 3d: Delete the first color in the array
colors.shift();

// Step 3e: Delete the last color in the array
colors.pop();

// Display updated array after steps 3d and 3e
console.log("Array after deleting first and last colors:", colors);

// Step 3f: Ask user to add a color at a specific index
let indexToAddColor = parseInt(prompt("Enter the index where you want to add a color:"));
let colorToAddAtIndex = prompt("Enter the color you want to add:");
colors.splice(indexToAddColor, 0, colorToAddAtIndex);

// Display updated array after step 3f
console.log("Array after adding color at index:", colors);

// Step 3g: Ask user to delete color(s) from a specific index
let indexToDelete = parseInt(prompt("Enter the index from where you want to delete color(s):"));
let numberOfColorsToDelete = parseInt(prompt("Enter how many colors you want to delete:"));
colors.splice(indexToDelete, numberOfColorsToDelete);

// Display final updated array after step 3g
console.log("Final Array after deleting colors:", colors);

//10
let arr2=[320,230,480,120]
let sorted =arr2.sort()
document.write(`Score of students:${arr2}`)
document.write(`Order Score of students:${sorted}`)




