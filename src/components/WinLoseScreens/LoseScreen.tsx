import React from "react";

interface LoseScreenProps {
  newGame: React.MouseEventHandler<HTMLButtonElement>;
}

const LoseScreen: React.FC<LoseScreenProps> = ({ newGame }) => {
  return (
    <div className="modal">
      <div className="lose-container">
        <h3>Game Over!</h3>
        <p>You lost the game!</p>
        <button onClick={newGame} className="play-again-btn">
          New Life
        </button>
      </div>
    </div>
  );
};

export default LoseScreen;
