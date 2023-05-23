import React from "react";
import { useGame } from "../components/context/GameProvider";

interface MenuProps {
  handleStartGame: React.FormEventHandler<HTMLFormElement>;

  setDifficulty: React.Dispatch<React.SetStateAction<number>>;
}

const Menu: React.FC<MenuProps> = ({
  handleStartGame,

  setDifficulty,
}) => {
  const { setPlayerName } = useGame();

  function handleSliderChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDifficulty(Number(event.target.value));
  }

  return (
    <div className="menu">
      <form onSubmit={handleStartGame} className="form-container">
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
