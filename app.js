const display = document.querySelector('.display');

let btn0 = document.getElementById('btn0');

btn0.addEventListener("click", e =>{
    display.innerText += "0"
})
document.getElementById('displayText').innerHTML = display;
alert("si")