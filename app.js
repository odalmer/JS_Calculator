// Numbers ==============================
let btn9 = document.getElementById('btn9');
let btn8 = document.getElementById('btn8');
let btn7 = document.getElementById('btn7');
let btn6 = document.getElementById('btn6');
let btn5 = document.getElementById('btn5');
let btn4 = document.getElementById('btn4');
let btn3 = document.getElementById('btn3');
let btn2 = document.getElementById('btn2');
let btn1 = document.getElementById('btn1');
let btn0 = document.getElementById('btn0');
let btnDot = document.getElementById('btnDot');
// operators ======================================
let btnAdd = document.getElementById('btnAdd');
let btnSub = document.getElementById('btnSub');
let btnEqual = document.getElementById('btnEqual');
let btnMult = document.getElementById('btnMult');
let btnDiv = document.getElementById('btnDiv');
let btnClear = document.getElementById('btnClear');
let btnRem = document.getElementById('btnRem');

// Output
const display = document.getElementById('displayText');

//variables 
let num1, num2, operator, letsOpe, haveResult;
num1 = 0;
num2 = 0;
letsOpe = false;
// NUMBERS ======================================== 
btn0.addEventListener("click", e => {
    if (display.innerText == "0") {
        display.innerText = "0"
    } else {
        display.innerText += "0"
    }

    if (letsOpe == false) {
        num1 = parseFloat(display.innerText);
    } else {
        num2 += "0";
        num2 = parseFloat(num2);
    }

})

btn1.addEventListener("click", e => {

    if (display.innerText == "0") {
        display.innerText = "1"
    } else {
        display.innerText += "1"
    }

    if (letsOpe == false) {
        num1 = parseFloat(display.innerText);
    } else {
        num2 += "1";
        num2 = parseFloat(num2);
        // letsOpe = false;
    }

})

btn2.addEventListener("click", e => {
    if (display.innerText == "0") {
        display.innerText = "2"
    } else {
        display.innerText += "2"
    }
    if (letsOpe == false) {
        num1 = parseFloat(display.innerText);
    } else {
        num2 += "2";
        num2 = parseFloat(num2);
    }

})

btn3.addEventListener("click", e => {

    if (display.innerText == "0") {
        display.innerText = "3"
    } else {
        display.innerText += "3"
    }
    if (letsOpe == false) {
        num1 = parseFloat(display.innerText);
    } else {
        num2 += '3';
        num2 = parseFloat(num2);
    }
})

btn4.addEventListener("click", e => {
    if (display.innerText == "0") {
        display.innerText = "4"

    } else {
        display.innerText += "4"
    }
    if (letsOpe == false) {
        num1 = parseFloat(display.innerText);
    } else {
        num2 += '4';
        num2 = parseFloat(num2);
    }

})

btn5.addEventListener("click", e => {
    if (display.innerText == "0") {
        display.innerText = "5"

    } else {
        display.innerText += "5"

    }
    if (letsOpe == false) {
        num1 = parseFloat(display.innerText);
        console.log('num1 ' + num1)

    } else {
        num2 += '5';
        num2 = parseFloat(num2);
        console.log('num2 ' + num2)

    }

})

btn6.addEventListener("click", e => {
    if (display.innerText == "0") {
        display.innerText = "6"

    } else {
        display.innerText += "6"

    }
    if (letsOpe == false) {
        num1 = parseFloat(display.innerText);
    } else {
        num2 += '6';
        num2 = parseFloat(num2);
    }

})

btn7.addEventListener("click", e => {
    if (display.innerText == "0") {
        display.innerText = "7"

    } else {
        display.innerText += "7"
    }
    if (letsOpe == false) {
        num1 = parseFloat(display.innerText);
    } else {
        num2 += '7';
        num2 = parseFloat(num2);
    }

})

btn8.addEventListener("click", e => {
    if (display.innerText == "0") {
        display.innerText = "8"
    } else {
        display.innerText += "8"
    }
    if (letsOpe == false) {
        num1 = parseFloat(display.innerText);
    } else {
        num2 += '8';
        num2 = parseFloat(num2);
    }

})

btn9.addEventListener("click", e => {
    if (display.innerText == "0") {
        display.innerText = "9"

    } else {
        display.innerText += "9"
    }
    if (letsOpe == false) {
        num1 = parseFloat(display.innerText);
    } else {
        num2 += '9';
        num2 = parseFloat(num2);
    }

})

btnDot.addEventListener("click", e => {
    if (display.innerText == "0") {
        display.innerText = "."

    } else {
        display.innerText += "."
    }
    if (letsOpe == false) {
        num1 = parseFloat(display.innerText);
        console.log('num1 ' + num1)

    } else {
        num2 += '.';
        // num2 += parseFloat(num2);
        console.log('num2 ' + num2)
    }
})

// OPERATORS =====================================
btnAdd.addEventListener('click', e => {
    if (haveResult == true) {
        num1 = parseFloat(display.innerText);
        haveResult = false
    }
    display.innerText += "+";
    operator = "+";
    letsOpe = true;
})
btnSub.addEventListener('click', e => {
    if (haveResult == true) {
        num1 = parseFloat(display.innerText);
        haveResult = false
    }
    display.innerText += "-";
    operator = "-";
    letsOpe = true;

})
btnMult.addEventListener('click', e => {
    if (haveResult == true) {
        num1 = parseFloat(display.innerText);
        haveResult = false
    }
    display.innerText += "x";
    operator = "*";
    letsOpe = true;

})

btnDiv.addEventListener("click", e => {
    if (haveResult == true) {
        num1 = parseFloat(display.innerText);
        haveResult = false
    }
    display.innerText += "÷";
    operator = "/";
    letsOpe = true;

})

btnRem.addEventListener('click', e => {
    if (haveResult == true) {
        num1 = parseFloat(display.innerText);
        haveResult = false
    }
    display.innerText += '%';
    operator = "%"
    letsOpe = true;
})

btnClear.addEventListener('click', e => {
    num1 = 0;
    num2 = 0;
    display.innerText = "0"
})
// doing the operations
btnEqual.addEventListener('click', e => {
    let result;
    // num2 = parseFloat(display.innerText)
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
    }
    if (result > 0) {
        display.innerText = result;
    }
    num1 = result;
    num2 = 0;
    console.log('num1 ' + num1)
    letsOpe = false;
    haveResult = true;

})


// document.getElementById('displayText').innerHTML = display;