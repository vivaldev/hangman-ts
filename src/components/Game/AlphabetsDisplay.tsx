import React from "react";
import { Alphabet } from "../../data";

interface AlphabetsDisplayProps {
  alphabets: Alphabet[];
  handleCharGuess: React.MouseEventHandler<HTMLButtonElement>;
}

const AlphabetsDisplay: React.FC<AlphabetsDisplayProps> = ({
  alphabets,
  handleCharGuess,
}) => {
  // Display the alphabet buttons that player uses to guess the word
  const alphabetsDisplay = alphabets.map((alphabet) => (
    <button
      onClick={handleCharGuess}
      disabled={alphabet.isGuessed}
      className={`alphabet-btn ${alphabet.isGuessed ? "guessed" : ""}`}
      key={alphabet.letter}
    >
      {alphabet.letter}
    </button>
  ));

  return <div className="letters-row">{alphabetsDisplay}</div>;
};

export default AlphabetsDisplay;
