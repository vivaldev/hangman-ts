import React from "react";
import GameHeader from "./GameHeader";
import WordCharecters from "./WordCharecters";
import GuessWord from "./GuessWord";
import { WordChars, Alphabet } from "../../data";
import AlphabetsDisplay from "./AlphabetsDisplay";

interface GameProps {
  randomWordChars: WordChars[];
  alphabets: Alphabet[];
  handleCharGuess: React.MouseEventHandler<HTMLButtonElement>;
  handleWordGuess: React.FormEventHandler<HTMLFormElement>;
  setGuessedWord: (value: string) => void;
}

const Game: React.FC<GameProps> = ({
  randomWordChars,
  alphabets,
  handleCharGuess,
  handleWordGuess,
  setGuessedWord,
}) => {
  return (
    <div className="game">
      <GameHeader />
      <div className="game-display">
        <WordCharecters randomWordChars={randomWordChars} />
        <div className="console-hangtree">Hangtree</div>
      </div>
      <div className="game-input">
        <AlphabetsDisplay
          alphabets={alphabets}
          handleCharGuess={handleCharGuess}
        />
      </div>
      <GuessWord
        handleWordGuess={handleWordGuess}
        setGuessedWord={setGuessedWord}
      />
    </div>
  );
};

export default Game;
