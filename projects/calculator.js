/* calculator.js */

function getValues() {
    return [
        Number(document.getElementById("first-number").value),
        Number(document.getElementById("second-number").value)
    ];
}
function setResult(result) {
    const output = document.getElementById("output");
    output.innerHTML = result;
    output.style.color = result < 0 ? "red" : "black";
}

function addition() { setResult(getValues()[0] + getValues()[1]); }
function subtraction() { setResult(getValues()[0] - getValues()[1]); }
function multiplication() { setResult(getValues()[0] * getValues()[1]); }
function division() { setResult(getValues()[1] !== 0 ? getValues()[0] / getValues()[1] : "Cannot divide by zero"); }
function power() {
    let [base, exponent] = getValues();
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    setResult(result);
}

function clearCalc() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";
}
