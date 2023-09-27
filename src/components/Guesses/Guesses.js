import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from "../../utils";
import Guess from '../Guess';

const BLANK_GUESSES = range(NUM_OF_GUESSES_ALLOWED).map(_ => ({ guess: '', id: crypto.randomUUID() }));

window.BLANK_GUESSES = BLANK_GUESSES;

function Guesses({ guesses, answer }) {
  const displayGuesses = [...guesses, ...BLANK_GUESSES.slice(0, NUM_OF_GUESSES_ALLOWED - guesses.length)];

  return (
    <div className='guess-results'>
      {displayGuesses.map(({ guess, id }) => <Guess key={id} value={guess} answer={answer}/>)}
    </div>
  );
}

export default Guesses;
