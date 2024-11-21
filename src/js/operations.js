import OperationType from "./operationType.js";

let leftOperand;
let rightOperand;
let equalClickedLast;
let percentClickedLast;
let operationClickedLast;
let currentOperation;

const inputText = document.querySelector('input');

const reset = () => {
    leftOperand = null;
    rightOperand = null;
    equalClickedLast = false;
    percentClickedLast = false;
    operationClickedLast = false;
    currentOperation = OperationType.NONE;
    inputText.value = '0';
}

const getOperationSymbol = (operation) => {
    switch (operation) {
        case OperationType.PLUS:
            return '+';
        case OperationType.MINUS:
            return '-';
        case OperationType.MULTIPLY:
            return '×';
        case OperationType.DIVIDE:
            return '÷';
    }
}

const calculate = (left, right, operationType) => {
    switch (operationType) {
        case OperationType.PLUS:
            return left + right;

        case OperationType.MINUS:
            return left - right;

        case OperationType.MULTIPLY:
            return left * right;

        case OperationType.DIVIDE:
            return left / right;
    }
}

const setResult = (number) => {
    if (!isNaN(number) && isFinite(number)) {
        inputText.value = number;
    }
    else {
        inputText.value = 'Error';
    }
}

const equalClick = () => {
    if (!inputText.value.length) return;
    if (leftOperand == null && !equalClickedLast) return;

    operationClickedLast = false;

    if (equalClickedLast) leftOperand = parseFloat(inputText.value);
    else rightOperand = parseFloat(inputText.value);

    const result = calculate(leftOperand, rightOperand, currentOperation);
    setResult(result);

    leftOperand = null;
    equalClickedLast = true;

    return result;
}

const percentClick = () => {
    if (!inputText.value.length) return;

    operationClickedLast = false;

    const operand = parseFloat(inputText.value);    

    if (leftOperand == null) {
        setResult(operand / 100);
        percentClickedLast = true;
        return;
    }

    rightOperand = operand;

    let result;
    if (currentOperation == OperationType.PLUS || currentOperation == OperationType.MINUS) {
        result = calculate(leftOperand, leftOperand * (rightOperand / 100), currentOperation);
    }
    else {
        result = calculate(leftOperand, rightOperand / 100, currentOperation);
    }
    setResult(result);

    leftOperand = null;
    percentClickedLast = true;

    return result;
}

const operationClick = (operation) => {
    if (operationClickedLast) return;
    const input = parseFloat(inputText.value);

    equalClickedLast = false;
    percentClickedLast = false;

    if (leftOperand == null) leftOperand = input;
    else leftOperand = calculate(leftOperand, input, currentOperation);

    inputText.value = getOperationSymbol(operation);
    currentOperation = operation;

    operationClickedLast = true;
}

const revertClick = () => {
    setResult(-parseFloat(inputText.value));
}

const inputClick = (button) => {
    operationClickedLast = false;

    // if the last clicked button is "=" or "%", we need to clear input first
    if (equalClickedLast || percentClickedLast) {
        reset();
    }

    if (!parseFloat(inputText.value) && !inputText.value.includes('0.')) {
        inputText.value = '';
    }

    inputText.value += button.getAttribute('value');

    if (inputText.value == '.') {
        inputText.value = '0.'
    }
};

const init = () => {
    // when any digit or '.' is clicked
    document.querySelectorAll('.btn.btn-input').forEach(button => {
        button.addEventListener('click', () => inputClick(button));
    });

    // operations
    document.querySelector('#operation-ac').addEventListener('click', reset);
    document.querySelector('#operation-plus').addEventListener('click', () => operationClick(OperationType.PLUS));
    document.querySelector('#operation-minus').addEventListener('click', () => operationClick(OperationType.MINUS));
    document.querySelector('#operation-multiply').addEventListener('click', () => operationClick(OperationType.MULTIPLY));
    document.querySelector('#operation-divide').addEventListener('click', () => operationClick(OperationType.DIVIDE));
    document.querySelector('#operation-revert-sign').addEventListener('click', revertClick);
    document.querySelector('#operation-perform').addEventListener('click', equalClick);
    document.querySelector('#operation-percent').addEventListener('click', percentClick);

    reset();
}

export default {
    init
}
