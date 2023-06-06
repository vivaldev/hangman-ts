import React from "react";
import GameHeader from "./GameHeader";
import WordCharecters from "./WordCharecters";
import GuessWord from "./GuessWord";
import { WordChars, Alphabet } from "../../data";
import AlphabetsDisplay from "./AlphabetsDisplay";
import { HangTree } from "./Hangtree/Hangtree"; // Ensure the path is correct according to your project structure.

interface GameProps {
  randomWordChars: WordChars[];
  alphabets: Alphabet[];
  handleCharGuess: React.MouseEventHandler<HTMLButtonElement>;
  handleWordGuess: React.FormEventHandler<HTMLFormElement>;
}

const Game: React.FC<GameProps> = ({
  randomWordChars,
  alphabets,
  handleCharGuess,
  handleWordGuess,
}) => {
  return (
    <div className="game">
      <GameHeader />
      <div className="game-display">
        <WordCharecters randomWordChars={randomWordChars} />
        <HangTree /> {/* Corrected the spelling */}
      </div>
      <div className="game-input">
        <AlphabetsDisplay
          alphabets={alphabets}
          handleCharGuess={handleCharGuess}
        />
      </div>
      <GuessWord handleWordGuess={handleWordGuess} />
    </div>
  );
};

export default Game;
