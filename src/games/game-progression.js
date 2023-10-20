import _ from 'lodash';
import { getUserAnswer } from '../index.js';

function ask() {
  console.log('What number is missing in the progression?');
}

function play() {
  const prog = [];
  const n = _.random(2, 12);
  for (let i = n; prog.length < 10; i += n) {
    prog.push(i);
  }
  const index = _.random(0, prog.length - 1);
  const beforeReplace = prog[index];

  prog.splice(index, 1, '..');
  const question = prog.join(' ');

  const userAnswer = getUserAnswer(question);
  const correctAnswer = beforeReplace;

  return [userAnswer, correctAnswer.toString()];
}
export { ask, play };
