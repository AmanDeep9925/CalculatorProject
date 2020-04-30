var buttons = document.getElementsByClassName("table-data");
var screen = document.getElementById("screen");

var operand1 = 0;
var operand2 = null;
var operator = null;

function clearScreen(){
    screen.innerText="";
}

function add2Screen(value){
    screen.innerText+=value;
    operand1 = parseFloat(screen.textContent);
}

function arithmeticFunctions(value){
    screen.innerText+=value;
}

function calculate(){
    var result = eval(screen.innerText);
    screen.innerText = result;
}

function changeSign(value){
    screen.innerText = '-' + screen.innerText;
}



for (var i = 0; i < buttons.length; ++i) {
    buttons[i].addEventListener('click', function () {
        var value = this.getAttribute('data-value');
        switch(value){
            case 'AC' : clearScreen(); break;
            case '+/-' : changeSign(value); break;
            case '%' : arithmeticFunctions(value); break;
            case '/' : arithmeticFunctions(value); break;
            case '7' : add2Screen(value); break;
            case '8' : add2Screen(value); break;
            case '9' : add2Screen(value); break;
            case '*' : arithmeticFunctions(value); break;
            case '4' : add2Screen(value); break;
            case '5' : add2Screen(value); break;
            case '6' : add2Screen(value); break;
            case '-' : arithmeticFunctions(value); break;
            case '1' : add2Screen(value); break;
            case '2' : add2Screen(value); break;
            case '3' : add2Screen(value); break;
            case '+' : arithmeticFunctions(value); break;
            case '0' : add2Screen(value); break;
            case '.' : add2Screen(value); break;
            case '=' : calculate(); break;
        }
    });
}