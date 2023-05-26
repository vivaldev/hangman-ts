import { useGame } from "../context/GameProvider";

const GameHeader = () => {
  // Use 'useContext' hook to get 'playerName' and 'guessCount' from the context
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
