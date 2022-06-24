// the program should ask for input from the user
// there will also be a while loop that keeps the program in the loop until the user says otherwise
// there would also be a loop that will keep running until the user enters the right data type or operator
var operation = true;
while (operation = true) {
    var operator = window.prompt('Enter the operator you wish to use for the operation eg "+ - / *": ')
    var firstNum = Number(window.prompt('Enter the first number for the operation:'));
    var secondNum = Number(window.prompt('Enter the second number for the operation:'));

    if (operator === '+') {
        var answer = firstNum + secondNum;  
        alert('Your answer = ' + answer);
    }
    else if (operator === '-') {
        var answer = firstNum - secondNum;
        alert('Your answer = ' + answer);
    }
    else if (operator === '/') {
        var answer = firstNum / secondNum;
        alert('Your answer = ' + answer);
    }
    else if (operator === '*') {
        var answer = firstNum * secondNum;
        alert('Your answer = ' + answer);
    }
    else {
        alert('wrong operation, please try again!!');
    }
    
    isQuit= window.prompt('Enter q to quit or any other input to continue:')
    if (isQuit.toLowerCase() === 'q') {
        break
    }
};