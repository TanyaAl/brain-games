import readlineSync from 'readline-sync';

function getUserAnswer(str) {
  console.log(`Question: ${str}`);
  return readlineSync.question('Your answer: ');
}

function executeGame(ruleOfGame, play) {
  const userName = readlineSync.question('Welcome to the Brain-games! \nMay I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(ruleOfGame);

  const numOfRounds = 3;
  for (let i = 0; i < numOfRounds; i += 1) {
    const [userAnswer, correctAnswer] = play();
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
}

export {
  executeGame, getUserAnswer,
};
