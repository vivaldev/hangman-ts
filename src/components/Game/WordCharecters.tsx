import React from "react";
import { WordChars } from "../../../data/data";

interface WordCharectersProps {
  randomWordChars: WordChars[];
}

const WordCharecters: React.FC<WordCharectersProps> = ({ randomWordChars }) => {
  // Display the word that player is trying to guess as individual characters
  // Depending of on players guess, display the character ("e.g 'A' or 'D'") or an underline ("_")

  const wordChars = randomWordChars.map(
    (charObj: { letter: string; isVisible: boolean }, index: number) => (
      <div key={charObj.letter + index} className="guess-letter">
        {charObj.isVisible ? charObj.letter : "_"}
      </div>
    )
  );

  return <div className="console-letters">{wordChars}</div>;
};

export default WordCharecters;
