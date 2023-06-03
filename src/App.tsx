import React, { useState } from "react";
import { wordsArray, initialAlphabets, WordChars } from "./data";

import LoseScreen from "./components/WinLoseScreens/LoseScreen";
import WinScreen from "./components/WinLoseScreens/WinScreen";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Game from "./components/Game/Game";

import { useGame, HighScore } from "./components/context/GameProvider";

const App: React.FC = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [integer, setInteger] = useState(0);
  const [difficulty, setDifficulty] = useState(10);
  const [randomWordChars, setRandomWordChars] = useState<WordChars[]>([]);
  const [alphabets, setAlphabets] = useState(initialAlphabets);

  const {
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
    highScore,
    setHighScore,
  } = useGame();

  function handleStartGame(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setGuessCount(0);
    setWrongGuesses(0);
    setAlphabets(initialAlphabets);
    setWinOrLose("");
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
    // Get the guessed letter from the button's innerText
    const guessedLetter = (event.target as HTMLButtonElement).innerText;

    // Check if player has any guesses left and add count
    if (guessCount < 14) {
      // Check if guessed letter is in word
      const guessedLetterIsInWord = randomWordChars.some(
        (charObj) => charObj.letter === guessedLetter
      );

      if (!guessedLetterIsInWord) {
        setGuessCount((count) => count + 1);
      }
    } else {
      setGuessCount((count) => count + 1);
      setWinOrLose("lose");
    }

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

    console.log(
      `Question Word: ${questionWord} - Guessed Word: ${guessedWord.toUpperCase()}`
    );

    if (questionWord === guessedWord.toUpperCase()) {
      setWinOrLose("win");
      endGame();
    } else {
      return;
    }
  }
  5;

  function endGame() {
    setGuessCount(0);
    setGameStarted(false);
    setAlphabets(initialAlphabets);
    setGuessedWord("");
  }

  console.log(`highScore: ${highScore}`);
  return (
    <div className="game-container">
      <Header />
      <div className="App">
        {winOrLose === "win" && <WinScreen newGame={handleStartGame} />}
        {winOrLose === "lose" && <LoseScreen newGame={handleStartGame} />}
        {gameStarted ? (
          <Game
            randomWordChars={randomWordChars}
            alphabets={alphabets}
            handleCharGuess={handleCharGuess}
            handleWordGuess={handleWordGuess}
          />
        ) : (
          <Menu
            handleStartGame={handleStartGame}
            setDifficulty={setDifficulty}
          />
        )}
      </div>
    </div>
  );
};

export default App;
