import getRandomInt from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

function generateRound() {
  const number = getRandomInt(1, 100);
  const userAnswer = getUserAnswer(number);
  const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';
  return [userAnswer, correctAnswer];
}

export { generateRound, rules };
