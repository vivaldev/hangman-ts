import React from "react";
import { useGame } from "./context/GameProvider";

interface MenuProps {
  startNewGame: React.FormEventHandler<HTMLFormElement>;

  setDifficulty: React.Dispatch<React.SetStateAction<number>>;
}

const Menu: React.FC<MenuProps> = ({ startNewGame, setDifficulty }) => {
  // Get 'setPlayerName' from GameProvider ( useContext, useGame)
  const { setPlayerName } = useGame();

  // Handle slider change and use built-in Number function to convert
  // string to number (HTML Range Input returns string value, for some reason)
  // Use setDifficulty that is passed as a prop from App.tsx and affects randomWord.lenth
  function handleSliderChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDifficulty(Number(event.target.value));
  }

  return (
    <div className="menu">
      <form onSubmit={startNewGame} className="form-container">
        <input
          className="name-input"
          type="text"
          placeholder="Username..."
          onChange={(e) => setPlayerName(e.target.value)}
          required
          autoFocus
        />
        <div className="difficulty">
          <label className="difficulty-label" htmlFor="difficulty">
            Difficulty:
          </label>
          <input
            name="difficulty"
            className="slider"
            type="range"
            min="4"
            max="16"
            defaultValue="10"
            step="2"
            onChange={handleSliderChange}
          />
        </div>
        <button className="btn" type="submit">
          Start Game
        </button>
      </form>
    </div>
  );
};

export default Menu;
