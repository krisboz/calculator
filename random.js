let displayValue = "0";
let firstNumber = null;
let secondNumber = null;
let firstOperator = null;
let secondOperator = null;
let result = null;

const showData = () => {
    console.log({
        displayValue,
        firstNumber,
        secondNumber,
        firstOperator,
        secondOperator,
        result
    })
}

const updateDOM = () => {
    const display = document.querySelector(".display");
    display.innerText = displayValue;
}
//1stnum, 2ndnum, firstop, 2nd op, dispVal
const inputNumber = (number) => {
    if (firstNumber === null) {
        if(displayValue === "0" || displayValue === 0) {
            displayValue = number;
        } else if (displayValue === firstNumber) {
            displayValue = number;
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
        result = operate(firstNumber, secondNumber, firstOperator);
        firstNumber = result;
        displayValue = firstNumber;
        secondNumber = null;



        
    } else if (firstOperator != null && secondOperator != null) {
        secondNumber = displayValue;
        firstOperator = secondOperator;
        secondOperator = operator;
        result = operate(firstNumber, secondNumber, firstOperator);
        displayValue = result;
        firstNumber = displayValue;
        secondNumber = null;
        

    } else {
        firstOperator = operator;
        firstNumber = displayValue;
    }

}


const operate = (a, b, operator) => {
    if (operator === "add") {
        return parseFloat(a) + parseFloat(b)
    } else if (operator === "subtract") {
        return parseFloat(a) - parseFloat(b)
    } else if (operator === "multiply") {
        return parseFloat(a) * parseFloat(b)
    } else if (operator === "divide") {
        return parseFloat(a) / parseFloat(b)
    }
}

document.querySelector(".buttons").addEventListener("click", e => {

    if (e.target.classList.contains("number")) {
        //Handle num click
        inputNumber(e.target.dataset.value)
        updateDOM();
        showData();
        //UpdateDOM
    } else if (e.target.classList.contains("operator")) {
        //Handle op click
        inputOperator(e.target.dataset.value)
        updateDOM();
        showData();
        //UpdateDOM
    } else if (e.target.classList.contains("equals")) {
        console.log("equals")
        //Handle equal click
        //UpdateDOM
    }
})