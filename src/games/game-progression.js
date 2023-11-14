import runEngine from '../index.js';
import getRandomInt from '../utils.js';

const rules = 'What number is missing in the progression?';
const makeProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; progression.length < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

function generateRound() {
  const start = getRandomInt(2, 12);
  const step = getRandomInt(2, 5);
  const length = getRandomInt(8, 12);
  const index = getRandomInt(0, length - 1);
  const progression = makeProgression(start, step, length);
  const beforeReplace = progression[index];

  progression.splice(index, 1, '..');
  const progressionToString = progression.join(' ');

  const correctAnswer = beforeReplace;

  return [progressionToString, correctAnswer.toString()];
}
export default () => { runEngine(rules, generateRound); };
