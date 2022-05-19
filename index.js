let displayValue = "0";
let firstNumber = null;
let secondNumber = null;
let firstOperator = null;
let secondOperator = null;
let result = null;

const updateDOM = () => {
    const display = document.querySelector(".display");
    display.innerText = displayValue.toString();
}

const inputNumber = (number) => {

    if (firstNumber === null){
        if (displayValue === "0" || displayValue === 0) {
            displayValue = number;
        } else if (displayValue === firstNumber) {
            displayValue = number
        } else {
            displayValue += number;
        }
    } else {
        if (displayValue === firstNumber) {
            displayValue = number;
        } else {
            displayValue += number;
        }
    }


}

const inputOperator = (operator) => {

    if (firstOperator != null && secondOperator === null) {
        secondOperator = operator;
        secondNumber = displayValue;
        result = operate(parseFloat(firstNumber), parseFloat(secondNumber), firstOperator)
        displayValue = result.toString();
        firstOperand = displayValue;
        result = null;
    } else if (firstOperator !=null && secondOperator != null) {
        secondNumber = displayValue;
        result = operate(parseFloat(firstNumber), parseFloat(secondNumber), secondOperator);
        secondOperator = operator;
        displayValue = result.toString();
        firstNumber = displayValue
        result = null;

    } else {
        firstOperator = operator;
        firstNumber = displayValue;
    }

}

const inputEquals = () => {
    if (firstOperator === null) {
        displayValue = displayValue
        //TODO
    } else if (secondOperator != null) {
        secondNumber = displayValue;
        result = operate(parseFloat(firstNumber), parseFloat(secondNumber), secondOperator);
        //todo if the user divides by 0
        displayValue = result.toString();
        firstNumber = displayValue;
        secondNumber = null;
        firstOperator = null;
        secondOperator = null;
        result = null;
    } else {
        secondNumber = displayValue;
        result = operate(parseFloat(firstNumber), parseFloat(secondNumber), firstOperator)
        displayValue = result.toString();
        firstNumber = displayValue;
        secondNumber = null;
        firstOperator = null;
        secondOperator = null;
        result = null;
    }
}

const operate = (a, b, operator) => {
    if (operator === "add") {
        return a + b
    } else if (operator === "subtract") {
        return a - b
    } else if (operator === "multiply") {
        return a * b
    } else if (operator === "divide") {
        return a / b
    }
}


//Add event listeners for the buttons
document.querySelector(".buttons").addEventListener("click", e => {

    let target = e.target.classList;
    if(target.contains("number")) {
        inputNumber(e.target.dataset.value)
        updateDOM();
        //DO number logic
    } else if (target.contains("operator")) {
        inputOperator(e.target.dataset.value)
        updateDOM();
        //Do operator logic
    } else if (target.contains("equals")) {
        console.log("equals")
        inputEquals();
        updateDOM();
        //Do equals logic
    }
    
})

//curr writing number
//past number
//pressed operator currently
//last pressed operator

//15 + 3 + 27 - 5
