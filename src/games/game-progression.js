import { getUserAnswer } from '../index.js';
import getRandomInt from '../utils.js';

const ruleOfGame = 'What number is missing in the progression?';

function play() {
  const prog = [];
  const n = getRandomInt(2, 12);
  for (let i = n; prog.length < 10; i += n) {
    prog.push(i);
  }
  const index = getRandomInt(0, prog.length - 1);
  const beforeReplace = prog[index];

  prog.splice(index, 1, '..');
  const question = prog.join(' ');

  const userAnswer = getUserAnswer(question);
  const correctAnswer = beforeReplace;

  return [userAnswer, correctAnswer.toString()];
}
export { play, ruleOfGame };
