import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import Guesses from '../Guesses';
import Banner from '../Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const WON = "won";
const LOST = "lost";
const PLAYING = "playing";

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const [gameState, setGameState] = React.useState(PLAYING);

  function addGuessAndCheckForEndgame(guess) {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);
    console.log("Guess:", guess);
    console.log(`Guess ${guess.guess} answer ${answer} answer == guess ${answer == guess.guess} answer === guess ${answer === guess.guess}`);
    if( guess.guess == answer ) {
      setGameState(WON);
    }
    else if( guesses.length + 1 >= 6 ) {
      setGameState(LOST);
    }
  }

  return (
    <>
      <Guesses guesses={guesses} answer={answer} />
      <GuessInput disabled={gameState !== PLAYING} addGuess={addGuessAndCheckForEndgame} />
      {gameState !== PLAYING ? <Banner won={gameState === WON} guesses={guesses.length} answer={answer} /> : null}
    </>);
}

export default Game;
