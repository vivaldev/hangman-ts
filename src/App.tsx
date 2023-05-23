import React, { useState, useContext, createContext } from "react";
import { wordsArray } from "./data";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Game from "./components/Game/Game";
import { GameProvider } from "./components/context/GameProvider";

type CharObj = { letter: string; isVisible: boolean };

const App: React.FC = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [difficulty, setDifficulty] = useState(10);
  const [randomWord, setRandomWord] = useState<CharObj[]>([]);

  function handleStartGame(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    getRandomWord();
    setGameStarted(true);
  }

  function getRandomWord() {
    const onlyWordsArray = wordsArray.map((wordObject) => wordObject.word);
    const filteredWords = onlyWordsArray.filter(
      (word) => word.length <= difficulty
    );
    const chosenWord =
      filteredWords[Math.floor(Math.random() * filteredWords.length)];

    // Create array of character objects
    const charObjArray = chosenWord
      .split("")
      .map((letter) => ({ letter, isVisible: false }));

    setRandomWord(charObjArray);
  }

  function handleGuess(event: React.MouseEvent<HTMLButtonElement>) {
    const letter = (event.target as HTMLButtonElement).innerText;
    console.log(`You pressed: ${letter} `);
  }

  return (
    <div className="App">
      <GameProvider>
        <Header />
        {gameStarted ? (
          <Game handleGuess={handleGuess} randomWord={randomWord} />
        ) : (
          <Menu
            handleStartGame={handleStartGame}
            setDifficulty={setDifficulty}
          />
        )}
      </GameProvider>
    </div>
  );
};

export default App;