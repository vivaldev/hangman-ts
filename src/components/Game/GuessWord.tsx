import React from "react";

interface GuessWordProps {
  handleWordGuess: React.FormEventHandler<HTMLFormElement>;
  setGuessedWord: (value: string) => void;
}

const GuessWord: React.FC<GuessWordProps> = ({
  handleWordGuess,
  setGuessedWord,
}) => {
  return (
    <form className="guess-word-form" onSubmit={handleWordGuess}>
      <label htmlFor="guessWordInput" className="guess-word-label">
        Guess the Word:
      </label>
      <input
        type="text"
        name="guessWordInput"
        className="guess-word-input"
        onChange={(e) => setGuessedWord(e.target.value)}
      />
      <button className="btn" type="submit">
        Guess
      </button>
    </form>
  );
};

export default GuessWord;
