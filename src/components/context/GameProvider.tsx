import React, { createContext, useState, useContext } from "react";

// Create types for context
export interface HighScore {
  id: number;
  name: string;
  score: number;
}

interface GameContextProps {
  playerName: string;
  setPlayerName: React.Dispatch<React.SetStateAction<string>>;
  guessCount: number;
  setGuessCount: React.Dispatch<React.SetStateAction<number>>;
  guessedWord: string;
  setGuessedWord: React.Dispatch<React.SetStateAction<string>>;
  wrongGuesses: number;
  winOrLose: string;
  setWinOrLose: React.Dispatch<React.SetStateAction<string>>;
  setWrongGuesses: React.Dispatch<React.SetStateAction<number>>;
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
  const [wrongGuesses, setWrongGuesses] = useState<number>(0);
  const [winOrLose, setWinOrLose] = useState("");

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
        winOrLose,
        setWinOrLose,
        wrongGuesses,
        setWrongGuesses,
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
