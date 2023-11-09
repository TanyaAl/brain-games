// import { string } from '../index.js';
import getRandomInt from '../utils.js';

const rules = 'Find the greatest common divisor of given numbers.';

function generateRound() {
  const a = getRandomInt(10, 100);
  const b = getRandomInt(10, 100);

  const string = `${a} ${b}`;
  const userAnswer;

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

export { generateRound, rules };
