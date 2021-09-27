

//Variables

let firstOperand = ""
let secondOperand = ""
let currentOperator = null





//Display

topDisplayValue = document.querySelector("#topDisplayValue")
bottomDisplayValue = document.querySelector("#bottomDisplayValue")




//buttons

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach((button) => 
    button.addEventListener('click', () => appendNumber(button.textContent))
)

function appendNumber(number) {
    if (bottomDisplayValue.textContent == "---") {
        bottomDisplayValue.textContent = ""
    }
    if (bottomDisplayValue.textContent == "0") {
        bottomDisplayValue.textContent = ""
    }
    if (bottomDisplayValue.textContent == "ERROR") {
        bottomDisplayValue.textContent = ""
    }
    bottomDisplayValue.textContent += number
}

const clearButton = document.querySelector("#clear")
clearButton.addEventListener('click', clearDisplay)

function clearDisplay() {
    topDisplayValue.textContent = "---"
    bottomDisplayValue.textContent = "---"
    firstOperand = ""
    secondOperand = ""
    currentOperator = null

}

const operatorButtons = document.querySelectorAll(".operator")
operatorButtons.forEach((button) => 
    button.addEventListener('click', () => setOperator(button.textContent))
    )

function setOperator (operator) {
    if (currentOperator !== null) { 
    evaluate()
}    if (bottomDisplayValue.textContent == "ERROR") {
    clearDisplay
}

    firstOperand = bottomDisplayValue.textContent
    topDisplayValue.textContent = bottomDisplayValue.textContent;
    bottomDisplayValue.textContent = 0
    currentOperator = operator
    
}

const equalsButton = document.querySelector(".evaluate")
equalsButton.addEventListener('click', evaluate)




// Calculations


function add (a, b) {
    return +a + +b
}

function subtract (a, b) {
    return a - b
}

function multiply (a, b) {
    return a * b
}

function divide (a, b) {
    return a / b
}

function calculate (operator, a, b) {
    if (operator == "+") {
        return bottomDisplayValue.textContent = add(a, b)
    } else if (operator == "-") {
        return bottomDisplayValue.textContent = subtract(a, b)
    } else if (operator == "x") {
        return bottomDisplayValue.textContent = multiply(a, b)
    } else if (operator == "/") {
        if (b == "0") {
            return bottomDisplayValue.textContent  = "ERROR"
        } else {return bottomDisplayValue.textContent = divide(a, b)
    }} else {
        return bottomDisplayValue.textContent = "ERROR"
    }
}


function evaluate () {
    secondOperand = bottomDisplayValue.textContent
    if (secondOperand == "ERROR") {
        clearDisplay()
        
    }
    console.log("equals called")

    // if (secondOperand == "0" && currentOperator == "/") {
    //     return 
    // }
   calculate(currentOperator, firstOperand, secondOperand)
}
