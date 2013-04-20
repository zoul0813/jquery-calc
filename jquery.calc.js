$(document).ready(function() {
  var digits = $('#calculator .digits ul li');
  var calculator = { left: false, right: false, result: 0, operator: '+' };
  function calculate() {
    calculator.result = eval(calculator.left + calculator.operator + calculator.right);
    $('#calculator .result').text(calculator.result);
    calculator.left = null;
    calculator.right = null;
    leftBuffer = '';
    rightBuffer = '';
  }
  function isDigit(key) {
    var digits = "0123456789";
    var digit = false;
    if(digits.indexOf(key) != -1)
      digit = true;
    return digit;
  }
  var leftBuffer = '';
  var rightBuffer = '';

  digits.click(function() {
    var key = $(this).text();;
    if(isDigit(key)) {
      if(calculator.left) {
        rightBuffer += key.toString();
        $('#calculator .result').text(rightBuffer);
      } else {
        leftBuffer += key.toString();
        $('#calculator .result').text(leftBuffer);
      }
    } else if(key != '=' && key != '.') {
      calculator.operator = key;
      calculator.left = leftBuffer;
    } else if(key == '.') {
      if(calculator.left) {
        rightBuffer += '.';
        $('#calculator .result').text(rightBuffer);
      } else {
        leftBuffer += '.';
        $('#calculator .result').text(leftBuffer);
      }
    } else {
      calculator.right = rightBuffer;
      if(calculator.left.substring(calculator.left.length-1, 1) == '.')
        calculator.left += '0';
      if(calculator.right.substring(calculator.right.length-1, 1) == '.')
        calculator.right += '0';
        
      calculate();
    }
  });
});
