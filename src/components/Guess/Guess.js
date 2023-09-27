import React from "react";

import { checkGuess } from "../../game-helpers";

function Guess( {value, answer} ) {
  const checkedValue = checkGuess(value, answer) ?? ['', '', '', '', ''];

  return (
    <p className='guess'>
      {checkedValue.map(({ letter, status }, index) => <span key={index} className={`cell ${status || ''}`}>{letter}</span>)}
    </p>
  );
}

export default Guess;
