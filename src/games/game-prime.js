import runEngine from '../index.js';
import getRandomInt from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  let divisor = 2;
  while (divisor <= number / 2) {
    if (number % divisor === 0) {
      return false;
    }
    divisor += 1;
  }
  return true;
}

function generateRound() {
  const question = getRandomInt(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
}

export default () => { runEngine(rules, generateRound); };
