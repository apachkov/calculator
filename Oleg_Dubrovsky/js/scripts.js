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

      if (result === undefined || isNaN(result)) return;
        resultRender(firstNumber, secondNumber, actionType, result);
        this.reset();
  }
}

function calculate(firstNumber, secondNumber, action) {
  var result;

    switch(action){
      case '+':
      case 'add': 
      return result = firstNumber + secondNumber;
    
      case '-':
      case 'minus': 
      return result = firstNumber - secondNumber;
     
      case '*':
      case 'multiply': 
      return result = firstNumber * secondNumber;
    
      case '/':
      case 'division': 
      return result = firstNumber / secondNumber;
    
      case '^':
      case 'elevate': 
      return result = pow(firstNumber,secondNumber);
    }    
    return result;
}

function pow(number, evaluator){
  var result=1;
  if(evaluator >=0) {
    for(var i = 0; i<evaluator; i++){
      result *=number;
      }
    }else {
      for (var i = evaluator; i >= 0; i++) {
        result /= number;
      }
    }
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
