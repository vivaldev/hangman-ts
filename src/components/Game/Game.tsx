import React from "react";
import GameHeader from "./GameHeader";
import { alphabetsArray } from "../../data";

interface GameProps {
  randomWord: { letter: string; isVisible: boolean };

  handleGuess: React.MouseEventHandler<HTMLButtonElement>;
}

const Game: React.FC<GameProps> = ({ randomWord, handleGuess }) => {
  const letters = alphabetsArray.map((letter) => (
    <button onClick={handleGuess} className="letter-btn" key={letter.letter}>
      {letter.letter}
    </button>
  ));

  const wordLetters = randomWord.map(
    (letterObj: { letter: string; isVisible: boolean }, index: number) => (
      <div key={letterObj.letter + index} className="guess-letter">
        {letterObj.isVisible ? letterObj.letter : "_"}
      </div>
    )
  );

  console.log(wordLetters);

  return (
    <div className="game">
      <GameHeader />
      <div className="game-display">
        <div className="console-letters">{wordLetters}</div>
        <div className="console-hangtree">Hangtree</div>
      </div>
      <div className="game-input">
        <div className="letters-row">{letters}</div>
      </div>
    </div>
  );
};

export default Game;
