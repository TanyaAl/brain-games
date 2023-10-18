import { getRandomInt, getUserAnswer } from '../index.js';

function getRandomOperator() {
  const operators = ['+', '-', '*'];
  const index = Math.floor(Math.random() * operators.length);
  return operators[index];
}

const operator = getRandomOperator();

function ask() {
  console.log('What is the result of the expression?');
}

function play() {
  const num1 = getRandomInt(1, 50);
  const num2 = getRandomInt(1, 50);
  const userAnswer = getUserAnswer(`${num1}${operator}${num2}`);
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
  }
  correctAnswer = toString.correctAnswer;
  return [userAnswer, correctAnswer];
}

export { ask, play };
