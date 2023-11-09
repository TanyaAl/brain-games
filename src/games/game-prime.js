import getRandomInt from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function generateRound() {
  const number = getRandomInt(1, 100);
  const userAnswer = getUserAnswer(number);

  let correctAnswer = 'yes';
  if (number < 2) {
    correctAnswer = 'no';
  }

  let divisor = 2;
  while (divisor <= number / 2) {
    if (number % divisor === 0) {
      correctAnswer = 'no';
      break;
    } else if (number % divisor !== 0) {
      correctAnswer = 'yes';
    }
    divisor += 1;
  }
  return [userAnswer, correctAnswer];
}

export { generateRound, rules };
