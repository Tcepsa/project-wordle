import React from "react";

function GuessInput( { addGuess, disabled } ) {
  const [guess, setGuess] = React.useState('');

  function convertAndSetGuess(nextGuess) {
    setGuess(nextGuess.toUpperCase());
  }

  function handleSubmit(event) {
    event.preventDefault();

    addGuess({ guess, id: crypto.randomUUID() });
    setGuess('');
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={ event => handleSubmit(event) }
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        pattern="[a-zA-Z]{5,5}"
        maxLength={5}
        value={guess}
        onChange={event => convertAndSetGuess(event.target.value)}
        disabled={disabled}
      />
    </form>
  );
}

export default GuessInput;
