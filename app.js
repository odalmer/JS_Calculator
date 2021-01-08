//this code is property of Odalmer Pimentel. insta:@odalmerp

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
const backDis = document.getElementById('backDisplay');
//variables 
let num1, num2, operator, letsOpe, haveResult;
let result;

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

    backDis.innerText += '0';
    if (letsOpe) {
        num2 = backDis.innerText;
    } else {
        num1 = backDis.innerText;
    }

})

btn1.addEventListener("click", e => {

    if (display.innerText == "0") {
        display.innerText = "1"
    } else {
        display.innerText += "1"
    }
    backDis.innerText += '1';
    if (letsOpe) {
        num2 = backDis.innerText;
    } else {
        num1 = backDis.innerText;
    }

})

btn2.addEventListener("click", e => {
    if (display.innerText == "0") {
        display.innerText = "2"
    } else {
        display.innerText += "2"
    }

    backDis.innerText += '2';
    if (letsOpe) {
        num2 = backDis.innerText;
    } else {
        num1 = backDis.innerText;
    }

})

btn3.addEventListener("click", e => {

    if (display.innerText == "0") {
        display.innerText = "3"
    } else {
        display.innerText += "3"
    }
    backDis.innerText += '3';
    if (letsOpe) {
        num2 = backDis.innerText;
    } else {
        num1 = backDis.innerText;
    }
})

btn4.addEventListener("click", e => {
    if (display.innerText == "0") {
        display.innerText = "4"

    } else {
        display.innerText += "4"
    }
    backDis.innerText += '4';
    if (letsOpe) {
        num2 = backDis.innerText;
    } else {
        num1 = backDis.innerText;
    }

})

btn5.addEventListener("click", e => {
    if (display.innerText == "0") {
        display.innerText = "5"

    } else {
        display.innerText += "5"

    }
    backDis.innerText += '5';
    if (letsOpe) {
        num2 = backDis.innerText;
    } else {
        num1 = backDis.innerText;
    }

})

btn6.addEventListener("click", e => {
    if (display.innerText == "0") {
        display.innerText = "6"

    } else {
        display.innerText += "6"

    }
    backDis.innerText += '6';
    if (letsOpe) {
        num2 = backDis.innerText;
    } else {
        num1 = backDis.innerText;
    }

})

btn7.addEventListener("click", e => {
    if (display.innerText == "0") {
        display.innerText = "7"

    } else {
        display.innerText += "7"
    }
    backDis.innerText += '7';
    if (letsOpe) {
        num2 = backDis.innerText;
    } else {
        num1 = backDis.innerText;
    }

})

btn8.addEventListener("click", e => {
    if (display.innerText == "0") {
        display.innerText = "8"
    } else {
        display.innerText += "8"
    }
    backDis.innerText += '8';
    if (letsOpe) {
        num2 = backDis.innerText;
    } else {
        num1 = backDis.innerText;
    }

})

btn9.addEventListener("click", e => {
    if (display.innerText == "0") {
        display.innerText = "9"

    } else {
        display.innerText += "9"
    }
    backDis.innerText += '9';
    if (letsOpe) {
        num2 = backDis.innerText;
    } else {
        num1 = backDis.innerText;
    }

})

btnDot.addEventListener("click", e => {
    if (display.innerText == "0") {
        display.innerText = "."

    } else {
        display.innerText += "."
    }
    backDis.innerText += '.';
    if (letsOpe) {
        num2 = backDis.innerText;
    } else {
        num1 = backDis.innerText;
    }
})

// OPERATORS =====================================
btnAdd.addEventListener('click', e => {
    display.innerText += "+"
    backDis.innerText = "";
    if (letsOpe) {
        Operation();
    }
    operator = "+";

    letsOpe = true;

    // console.log('num1 ' + num1)
    // console.log('num2 ' + num2)

})
btnSub.addEventListener('click', e => {
    display.innerText += "-"
    backDis.innerText = "";
    if (letsOpe) {
        Operation();
    }
    operator = "-";

    letsOpe = true;
})
btnMult.addEventListener('click', e => {
    display.innerText += "x"
    backDis.innerText = "";
    console.log('num1 ' + num1);
    console.log('num2 ' + num2);

    if (letsOpe) {
        Operation();
    }
    operator = "*";

    letsOpe = true;
})

btnDiv.addEventListener("click", e => {
    display.innerText += "÷"
    backDis.innerText = "";
    if (letsOpe) {
        Operation();
    }
    operator = "/";

    letsOpe = true;

})


btnClear.addEventListener('click', e => {
    num1 = 0;
    num2 = 0;
    backDis.innerText = "";
    display.innerText = "0"
})

// doing the operations
btnEqual.addEventListener('click', e => {
    letsOpe = false;
    
    Operation();
    if (result > 0) {
        display.innerText = result;
        backDis.innerText = result;
    }
    letsOpe = false;
})

function Operation() {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

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
        case '%':
            result = num1 * num2;
            result /= 100;
    }
    num1 = result;
    num2 = 0;
    console.log('result ' + result)
    console.log('num1 ' + num1)

    return result;
}