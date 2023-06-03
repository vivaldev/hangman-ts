import React from "react";

interface WinScreenProps {
  newGame: () => void;
}

const WinScreen = ({ newGame }) => {
  return (
    <div className="modal">
      <div className="win-container">
        <h3>Congratulations!</h3>
        <p>You won the game!</p>
        <button onClick={newGame} className="play-again-btn">
          Play Again
        </button>
      </div>
    </div>
  );
};

export default WinScreen;
