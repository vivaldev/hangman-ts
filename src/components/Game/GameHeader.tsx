import React, { useContext } from "react";
import { useGame } from "../../components/context/GameProvider";

const GameHeader = () => {
  const { playerName, guessCount } = useGame();
  return (
    <div className="game-header">
      <div className="player-name">
        Player: <span>{playerName}</span>{" "}
      </div>
      <div className="guess-count">
        Guesses: <span>{guessCount}</span>/10
      </div>
    </div>
  );
};

export default GameHeader;
