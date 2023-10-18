import readlineSync from 'readline-sync';

function getUserName() {
  const userName = readlineSync.question('Welcome to the Brain-games! \nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
}

function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getUserAnswer(str) {
  console.log(`Question: ${str}`);
  return readlineSync.question('Your answer: ');
}

function executeGame(ask, play) {
  const userName = getUserName();
  ask();
  for (let i = 0; i < 3; i += 1) {
    const [userAnswer, correctAnswer] = play();
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
}

export { executeGame, getRandomInt, getUserAnswer };
