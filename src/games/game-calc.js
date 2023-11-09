import getRandomInt from '../utils.js';

function getRandomOperator() {
  const operators = ['+', '-', '*'];
  const index = Math.floor(Math.random() * operators.length);
  return operators[index];
}

const rules = 'What is the result of the expression?';

function generateRound() {
  const num1 = getRandomInt(1, 50);
  const num2 = getRandomInt(1, 50);
  const operator = getRandomOperator();
  const userAnswer = getUserAnswer(`${num1} ${operator} ${num2}`);
  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      break;
  }
  return [userAnswer, correctAnswer.toString()];
}

export { generateRound, rules };
