document.addEventListener('DOMContentLoaded', function() {
    const inputNumber = document.getElementById('inputNumber');
    const greenResult = document.getElementById('greenResult');
    const yellowResult = document.getElementById('yellowResult');
    const workResult = document.getElementById('workResult');
    const redResult = document.getElementById('redResult');
    const resetButton = document.getElementById('resetButton');
    const keypadKeys = document.querySelectorAll('.key');

    keypadKeys.forEach(key => {
        key.addEventListener('click', function() {
            const value = key.getAttribute('data-value');
            inputNumber.value += value;
            calculate();
        });
    });

    inputNumber.addEventListener('input', calculate);
    resetButton.addEventListener('click', reset);

    function calculate() {
        const number = parseInt(inputNumber.value);
        if (!isNaN(number)) {
            const green = Math.floor(number * 0.7);
            const yellow = Math.floor(number * 0.5);
            const red = Math.floor(number * 0.3);
            const work = Math.floor(number * 1.1)
            greenResult.textContent = green;
            yellowResult.textContent = yellow;
            redResult.textContent = red;
            workResult.textContent = work;
        } else {
            greenResult.textContent = 0;
            yellowResult.textContent = 0;
            redResult.textContent = 0;
            workResult.textContent = 0;
        }
    }

    function reset() {
        inputNumber.value = '';
        greenResult.textContent = 0;
        yellowResult.textContent = 0;
        redResult.textContent = 0;
    }
});
