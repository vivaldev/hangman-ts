import React from "react";
import GameHeader from "./GameHeader";

interface GameProps {
  wordChars: any;
  alphabetsDisplay: any;
}

const Game: React.FC<GameProps> = ({
  wordChars,

  alphabetsDisplay,
}) => {
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
