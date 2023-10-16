import readlineSync from 'readline-sync';

console.log('Answer "yes" if the number is even, otherwise answer "no".');

function getRandomInt(min, max) {
  // eslint-disable-next-line no-param-reassign
  min = Math.ceil(min);
  // eslint-disable-next-line no-param-reassign
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function game() {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomInt(1, 100);
    console.log(`Question: ${randomNumber}`);
    const boolNumber = randomNumber % 2 === 0;

    const answer = readlineSync.question('Your answer: ');
    const boolAnswer = answer === 'yes';

    if (boolNumber !== boolAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${boolNumber === true ? '\'yes\'' : '\'no\''}.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
}
game();
