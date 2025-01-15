let expression = '';

function pressKey(key) {
    let display = document.getElementById('display');
    if (display.value === '0') {
        display.value = key;
    } else {
        display.value += key;
    }
    expression += key;
}

function calculate() {
    try {
        let result = eval(expression);
        document.getElementById('display').value = result;
        expression = result.toString();
    } catch (error) {
        document.getElementById('display').value = 'Error';
        expression = '';
    }
}

function clearDisplay() {
    expression = '';
    document.getElementById('display').value = '0';
}
