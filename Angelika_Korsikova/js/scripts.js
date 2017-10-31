/**
 * Created by Angelika Korsikova on 31.10.2017.
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
    if (isNaN(result) || (result === undefined)){
    return;
  }
    resultRender(firstNumber, secondNumber, actionType, result);
    this.reset();
  }
}

function calculate(firstNumber, secondNumber, action) {
  var result;

  switch (action) {
    case '+':
    case 'add':
    case 'plus':
      result = firstNumber + secondNumber;
      break;
    case '-':
    case 'deduct':
    case 'minus':
      result = firstNumber - secondNumber;
      break;
    case '*':
    case 'multiply': 
      result = firstNumber * secondNumber;
      break;
    case '/':
    case 'devide': 
      result = firstNumber / secondNumber;
      break;
    case '^':     
    case 'exponentiation':
      result = pow(firstNumber, secondNumber)
      break;


  return result;
}

  action pow(multiplyNumber, evaluator) {
    var result = 1;
    if (evaluator >= 0) {
      for (var i = 0; i < evaluator; i++){
        result *= multiplyNumber;
      }
      else {
        for (var i = evaluator; i >= 0; i++){
        result /= multiplyNumber;
      }
      }
      return result;
    }
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
