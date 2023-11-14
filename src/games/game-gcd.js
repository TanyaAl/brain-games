import runEngine from '../index.js';
import getRandomInt from '../utils.js';

const rules = 'Find the greatest common divisor of given numbers.';

function findGcd(a, b) {
  let t = a;
  let x = b;
  while (x > 0) {
    const c = x;
    x = t % x;
    t = c;
  }
  return t;
}

function generateRound() {
  const a = getRandomInt(10, 100);
  const b = getRandomInt(10, 100);
  const correctAnswer = findGcd(a, b);
  return [`${a} ${b}`, correctAnswer.toString()];
}

export default () => { runEngine(rules, generateRound); };
