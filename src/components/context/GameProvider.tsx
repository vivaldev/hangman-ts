import React, { createContext, useState, useContext } from "react";

// Create types for context
export interface HighScore {
  id: number;
  player: string;
  points: number;
}

interface GameContextProps {
  playerName: string;
  setPlayerName: React.Dispatch<React.SetStateAction<string>>;
  guessCount: number;
  setGuessCount: React.Dispatch<React.SetStateAction<number>>;
  guessedWord: string;
  setGuessedWord: React.Dispatch<React.SetStateAction<string>>;
  gameWon: boolean;
  setGameWon: React.Dispatch<React.SetStateAction<boolean>>;
  wrongGuesses: number;
  setWrongGuesses: React.Dispatch<React.SetStateAction<number>>;
  highScore: HighScore[];
  setHighScore: React.Dispatch<React.SetStateAction<HighScore[]>>;
}

interface GameProviderProps {
  children: React.ReactNode;
}

// Create context
const GameContext = createContext<GameContextProps | undefined>(undefined);

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  // Create states here and pass them with useContext hook
  const [playerName, setPlayerName] = useState("");
  const [guessCount, setGuessCount] = useState(0);
  const [guessedWord, setGuessedWord] = useState("");
  const [gameWon, setGameWon] = useState(false);
  const [wrongGuesses, setWrongGuesses] = useState<number>(0);
  const [highScore, setHighScore] = useState([
    {
      id: 0,
      player: "",
      points: 0,
    },
  ]);

  // Create GameContext.Provired (built-in property) and with that we can pass the states to the children components
  return (
    <GameContext.Provider
      value={{
        playerName,
        setPlayerName,
        guessCount,
        setGuessCount,
        guessedWord,
        setGuessedWord,
        gameWon,
        setGameWon,
        wrongGuesses,
        setWrongGuesses,
        highScore,
        setHighScore,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

// Create custom hook for using context
export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};
