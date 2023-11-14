import readlineSync from 'readline-sync';

const numOfRounds = 3;

function runEngine(rules, generateRound) {
  const userName = readlineSync.question('Welcome to the Brain-games! \nMay I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(rules);

  for (let i = 0; i < numOfRounds; i += 1) {
    const [questionToUser, correctAnswer] = generateRound();

    console.log(`Question: ${questionToUser}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
}

export default runEngine;
