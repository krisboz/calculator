//add
function add(a, b) {
    return(a + b)
}
//subtract
function subtract(a, b) {
    return(a-b)
}
//multiply
function multiply(a, b) {
    return(a * b)
}
//divide
function divide(a, b) {
    return(a/b)
}

function operate(a, b, operator) {
    var res= operator(a,b)
    console.log(res)
}

operate(1, 3, add)


