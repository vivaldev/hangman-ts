import React, { createContext, useState, useContext } from "react";

interface GameContextProps {
  playerName: string;
  setPlayerName: React.Dispatch<React.SetStateAction<string>>;
  guessCount: number;
  setGuessCount: React.Dispatch<React.SetStateAction<number>>;
}

interface GameProviderProps {
  children: React.ReactNode;
}

// Luodaan uusi konteksti
const GameContext = createContext<GameContextProps | undefined>(undefined);

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [playerName, setPlayerName] = useState("");
  const [guessCount, setGuessCount] = useState(0);

  return (
    <GameContext.Provider
      value={{ playerName, setPlayerName, guessCount, setGuessCount }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};
