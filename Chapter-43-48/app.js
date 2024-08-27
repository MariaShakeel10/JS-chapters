// 3
function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
// 4
function change(event) {

        document.querySelector("#img").setAttribute("src", "./1.png")
     
}
function reset(event) {

    document.querySelector("#img").setAttribute("src", "./2.png")
 
}
// 5
let counterValue = 0;

function updateCounter() {
    document.getElementById('counter').textContent = counterValue;
}

function increase() {
    counterValue++;
    updateCounter();
}

function decrease() {
    counterValue--;
    updateCounter();
}