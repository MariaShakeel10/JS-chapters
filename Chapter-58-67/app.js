// Q1
// 1
const mainContent = document.getElementById('main-content');
// 2
// Get all child elements of the "main-content" element
const childElements = mainContent.children;

// Display each child element
for (let i = 0; i < childElements.length; i++) {
    console.log(childElements[i]);
}
// 3
// Get all elements with class "render"
const renderElements = document.getElementsByClassName('render');

// Display the innerHTML of each element in the browser
for (let i = 0; i < renderElements.length; i++) {
    console.log(renderElements[i].innerHTML);
}
// 4
// Get the input element with id "first-name"
const firstNameInput = document.getElementById('first-name');

// Set the value of the input element
firstNameInput.value = 'Alex';
// 5
// Get the input element with id "last-name"
const lastNameInput = document.getElementById('last-name');

// Set the value of the input element
lastNameInput.value = 'Bank';

// Get the input element with id "email"
const emailInput = document.getElementById('email');

// Set the value of the input element
emailInput.value = 'alexbank@example.com';
// Q2
// i. Node type of element having id "form-content"
const formContent = document.getElementById('form-content');
console.log('Node type of "form-content":', formContent.nodeType); // 1: Element node

// ii. Node type of element having id "lastName" and its child node
const lastNameElement = document.getElementById('lastName');
console.log('Node type of "lastName":', lastNameElement.nodeType); // 1: Element node
console.log('Node type of child node of "lastName":', lastNameElement.firstChild.nodeType); // 3: Text node

// iii. Update child node of element having id "lastName"
lastNameElement.firstChild.nodeValue = 'Last Name: abc'; // Update the text content

// iv. Get First and last child of id "main-content"
const firstChild = mainContent.firstElementChild;
const lastChild = mainContent.lastElementChild;
console.log('First child of "main-content":', firstChild.innerHTML);
console.log('Last child of "main-content":', lastChild.innerHTML);

// v. Get next and previous siblings of id "lastName"
const nextSibling = lastNameElement.nextElementSibling;
const previousSibling = lastNameElement.previousElementSibling;
console.log('Next sibling of "lastName":', nextSibling.innerHTML);
console.log('Previous sibling of "lastName":', previousSibling.innerHTML);

// vi. Get parent node and node type of element having id "email"
const emailElement = document.getElementById('email');
const parentElement = emailElement.parentNode;
console.log('Parent node of "email":', parentElement.id); // Should be "form-content"
console.log('Node type of parent node:', parentElement.nodeType); // 1: Element node