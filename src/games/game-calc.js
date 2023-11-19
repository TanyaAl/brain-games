import runEngine from '../index.js';
import getRandomInt from '../utils.js';

function getRandomOperator() {
  const operators = ['+', '-', '*'];
  const index = Math.floor(Math.random() * operators.length);
  return operators[index];
}

const rules = 'What is the result of the expression?';

function calculation(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Invalid operator - ${operator}`);
  }
}

function generateRound() {
  const num1 = getRandomInt(1, 50);
  const num2 = getRandomInt(1, 50);
  const operator = getRandomOperator();
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculation(num1, num2, operator).toString();

  return [question, correctAnswer];
}

export default () => { runEngine(rules, generateRound); };
