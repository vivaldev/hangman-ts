import React from "react";
import GameHeader from "./GameHeader";
import { Alphabet, WordChars } from "../../data";

interface GameProps {
  randomWordChars: WordChars[];
  alphabets: Alphabet[];
  handleGuess: React.MouseEventHandler<HTMLButtonElement>;
}

const Game: React.FC<GameProps> = ({
  randomWordChars,
  handleGuess,
  alphabets,
}) => {
  // Display the alphabet buttons that player uses to guess the word
  const alphabetsDisplay = alphabets.map((alphabet) => (
    <button
      onClick={handleGuess}
      className={`letter-btn ${alphabet.isGuessed ? "guessed" : ""}`}
      key={alphabet.letter}
    >
      {alphabet.letter}
    </button>
  ));

  // Display the word that player is trying to guess as individual characters
  const wordChars = randomWordChars.map(
    (letterObj: { letter: string; isVisible: boolean }, index: number) => (
      <div key={letterObj.letter + index} className="guess-letter">
        {letterObj.isVisible ? letterObj.letter : "_"}
      </div>
    )
  );

  return (
    <div className="game">
      <GameHeader />
      <div className="game-display">
        <div className="console-letters">{wordChars}</div>
        <div className="console-hangtree">Hangtree</div>
      </div>
      <div className="game-input">
        <div className="letters-row">{alphabetsDisplay}</div>
      </div>
    </div>
  );
};

export default Game;
