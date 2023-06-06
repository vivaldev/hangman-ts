// path: './components/EndScreen.tsx
import React from "react";

interface EndScreenProps {
  newGame: React.MouseEventHandler<HTMLButtonElement>;
  winOrLose: string;
}

const EndScreen: React.FC<EndScreenProps> = ({ newGame, winOrLose }) => {
  const title = winOrLose === "win" ? "Congratulations!" : "Game Over!";
  const message =
    winOrLose === "win" ? "You won the game!" : "You lost the game!";

  return (
    <div className="modal">
      <div className={`${winOrLose}-container`}>
        <h3>{title}</h3>
        <p>{message}</p>
        <button onClick={newGame} className="play-again-btn">
          New Life
        </button>
      </div>
    </div>
  );
};

export default EndScreen;
