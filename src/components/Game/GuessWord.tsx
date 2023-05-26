import React from "react";
import { useGame } from "../context/GameProvider";

interface GuessWordProps {
  handleWordGuess: React.FormEventHandler<HTMLFormElement>;
}

const GuessWord: React.FC<GuessWordProps> = ({ handleWordGuess }) => {
  // Get 'guessedWord' and use 'setGuessedWord' from GameProvider ( useContext, useGame)
  const { setGuessedWord } = useGame();
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
