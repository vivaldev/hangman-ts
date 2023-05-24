import React, { useState } from "react";
import { wordsArray, initialAlphabets, WordChars } from "./data";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Game from "./components/Game/Game";
import { GameProvider } from "./components/context/GameProvider";

const App: React.FC = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [wordLength, setWordLength] = useState(10);
  const [randomWordChars, setRandomWordChars] = useState<WordChars[]>([]);
  const [alphabets, setAlphabets] = useState(initialAlphabets);

  function handleStartGame(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    getRandomWord();
    setGameStarted(true);
  }

  function getRandomWord() {
    // Get all word objects from DB and filter them by word length (user set difficulty)
    const onlyWordsArray = wordsArray.map((wordObject) => wordObject.word);
    const filteredWords = onlyWordsArray.filter(
      (word) => word.length <= wordLength
    );

    // Choose a random word from the filtered word candidates
    const chosenWord =
      filteredWords[Math.floor(Math.random() * filteredWords.length)];

    // Split the chosen word into an array of characters and map them to an object with a letter and a boolean value
    const chosenWordChars = chosenWord
      .split("")
      .map((letter) => ({ letter, isVisible: false }));

    setRandomWordChars(chosenWordChars);
  }

  function handleGuess(event: React.MouseEvent<HTMLButtonElement>) {
    // Get the guessed letter from the button's innerText
    const guessedLetter = (event.target as HTMLButtonElement).innerText;

    // Change the display of the guessed letter
    setAlphabets((alphabets) =>
      alphabets.map((alphabet) =>
        alphabet.letter === guessedLetter
          ? { ...alphabet, isGuessed: true }
          : alphabet
      )
    );
  }

  return (
    <div className="App">
      <GameProvider>
        <Header />
        {gameStarted ? (
          <Game
            handleGuess={handleGuess}
            randomWordChars={randomWordChars}
            alphabets={alphabets}
          />
        ) : (
          <Menu
            handleStartGame={handleStartGame}
            setWordLength={setWordLength}
          />
        )}
      </GameProvider>
    </div>
  );
};

export default App;
