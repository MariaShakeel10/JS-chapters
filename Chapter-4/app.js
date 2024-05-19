var subjectsMarks = {
    "maths": 56,
    "english": 67,
    "isl": 67
};
console.log(subjectsMarks);
// illegal
/*
var 1alert = "hi"
var if = "hello"
var welcome user = "hello"
var "hi"= "hello"
var (welcome) = "hello"
*/
// legal
var welcome;
var userName;
var info;
var _greetings;
var $quantity;

document.write(`<h1>Rules for naming JS variables</h1>`);
document.write(`<ul><li>Variable names can only contain numbers, alphabets,
    $ and _.For example $my_1stVariable</li><li>Variables must begin with a alphabet, $ or
        _. For example $name, _name or name</li><li>Variable names are case <i>sensitive</i></li><li>Variable names should not be JS <i>keywords</i></li></ul>`)