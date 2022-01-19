// Aufgabe 1 js_einführung_forms+ja-function-double_Lev1_1

let number = document.getElementById("number");
let numberResult = document.getElementById("numberResult");

function calc() {
    numberResult.innerHTML = number.value * 2;
}


// Aufgabe 2 js_einführung_forms+ja-function-double_Lev1_2

let year = document.getElementById("year");
let howOld = document.getElementById("howOld");

function age() {
    howOld.innerHTML = 2022 - year.value;
}