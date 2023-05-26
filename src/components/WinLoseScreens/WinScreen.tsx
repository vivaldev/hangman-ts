import React from "react";

const WinScreen = () => {
  return (
    <div className="modal">
      <div className="win-container">
        <h3>Congratulations!</h3>
        <p>You won the game!</p>
        <button className="play-again-btn">Play Again</button>
      </div>
    </div>
  );
};

export default WinScreen;
