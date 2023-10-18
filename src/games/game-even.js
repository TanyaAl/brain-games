import { getRandomInt, getUserAnswer } from '../index.js';

function ask() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
}

function play() {
  const number = getRandomInt(1, 100);
  const userAnswer = getUserAnswer(number);
  const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';
  return [userAnswer, correctAnswer];
}

export { ask, play };
