import React, { useState } from "react";
import { wordsArray, initialAlphabets, WordChars } from "./data";

import WinScreen from "./components/WinLoseScreens/WinScreen";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Game from "./components/Game/Game";
import { useGame } from "./components/context/GameProvider";

const App: React.FC = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [difficulty, setDifficulty] = useState(10);
  const [randomWordChars, setRandomWordChars] = useState<WordChars[]>([]);
  const [alphabets, setAlphabets] = useState(initialAlphabets);

  const { guessCount, setGuessCount, guessedWord, gameWon, setGameWon } =
    useGame();

  function handleStartGame(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    getRandomWord();
    setGameStarted(true);
  }

  function getRandomWord() {
    // Get all word objects from DB and filter them by word length (user set difficulty)
    const onlyWordsArray = wordsArray.map((wordObject) => wordObject.word);
    const filteredWords = onlyWordsArray.filter(
      (word) => word.length <= difficulty
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

  function handleCharGuess(event: React.MouseEvent<HTMLButtonElement>) {
    // Check if player has any guesses left and add count
    if (guessCount < 9) {
      setGuessCount((count) => count + 1);
    } else {
      setGuessCount((count) => count + 1);
      console.log("Game Over!");
    }

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

    // Check matches
    setRandomWordChars((currentWordChars) =>
      currentWordChars.map((charObj) =>
        charObj.letter === guessedLetter
          ? { ...charObj, isVisible: true }
          : charObj
      )
    );
  }

  function handleWordGuess(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const questionWord = randomWordChars
      .map((charObj) => charObj.letter)
      .join("")
      .toUpperCase(); // Convert to upper case
    const guessedWordUpperCased = guessedWord.toUpperCase();

    console.log(
      `Question Word: ${questionWord} - Guessed Word: ${guessedWordUpperCased}`
    );

    if (questionWord === guessedWordUpperCased) {
      setGameWon(true);
    } else {
      console.log("Wrong guess!");
    }
  }

  return (
    <div className="App">
      <Header />
      {gameWon && <WinScreen />}
      {gameStarted ? (
        <Game
          randomWordChars={randomWordChars}
          alphabets={alphabets}
          handleCharGuess={handleCharGuess}
          handleWordGuess={handleWordGuess}
        />
      ) : (
        <Menu handleStartGame={handleStartGame} setDifficulty={setDifficulty} />
      )}
    </div>
  );
};

export default App;
