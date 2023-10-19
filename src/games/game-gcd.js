import { getRandomInt, getUserAnswer } from '../index.js';

function ask() {
  console.log('Find the greatest common divisor of given numbers.');
}

function play() {
  const a = getRandomInt(10, 100);
  const b = getRandomInt(10, 100);

  const userAnswer = getUserAnswer(`${a} ${b}`);
  let correctAnswer;
  let t = a;
  let x = b;
  while (x > 0) {
    const c = x;
    x = t % x;
    t = c;
    correctAnswer = t;
  }
  return [userAnswer, correctAnswer.toString()];
}

export { ask, play };
