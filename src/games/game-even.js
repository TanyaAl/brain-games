import runEngine from '../index.js';
import getRandomInt from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => (number % 2 === 0);

function generateRound() {
  const question = getRandomInt(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
}

export default () => { runEngine(rules, generateRound); };
