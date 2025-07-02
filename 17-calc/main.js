'use strict';

function calculate(operation) {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  if (isNaN(num1) || isNaN(num2)) {
    console.log('Введено не число.');
    document.getElementById('result').innerText = 'Введено не число';
    return;
  }
  let result = 0;
  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = (num1 * num2);
      break;
    case '/':
      result = (num1 / num2);
      break;
  }
  document.getElementById('result').textContent = result.toFixed(2);
  document.getElementById('num1').value = '';
  document.getElementById('num2').value = '';
}