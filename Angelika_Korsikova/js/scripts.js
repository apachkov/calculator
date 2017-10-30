/**
 * Created by John Doe on 17.10.2017.
 */
document.onreadystatechange = function () {
  if (document.readyState === 'interactive') {
    initCalculator();
  }
};

function initCalculator() {
  var
    calculator = document.getElementById('calculator'),
    first = document.getElementById('first-number'),
    second = document.getElementById('second-number'),
    action = document.getElementById('action');

  calculator.onsubmit = function(event) {
    var
      firstNumber = parseFloat(first.value),
      secondNumber = parseFloat(second.value),
      actionType = action.value.trim(),
      result = calculate(firstNumber, secondNumber, actionType);

    event.preventDefault();

    resultRender(firstNumber, secondNumber, actionType, result);
    this.reset();
  }
}

function calculate(firstNumber, secondNumber, action) {
  var result;

  switch (action) {
    case: '+'
      result = firstNumber + secondNumber;
      break;
    case: '-'
      result = firstNumber - secondNumber;
      break;
    case: '*'
      result = firstNumber * secondNumber;
      break;
    case: '/'
      result = firstNumber / secondNumber;
      break;

  return result;
}

function resultRender(firstNumber, secondNumber, action, result) {
  var
    results = document.getElementById('results'),
    resultPreviousLine = results.firstChild,
    resultLine = document.createElement('li'),
    resultText = document.createTextNode(firstNumber + ' ' + action + ' ' + secondNumber + ' = ' + result);

  resultLine.appendChild(resultText);

  if (resultPreviousLine) {
    results.insertBefore(resultLine, resultPreviousLine);
  } else {
    results.appendChild(resultLine);
  }
}
