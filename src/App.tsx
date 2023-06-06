// path: './App.tsx'
import React, { useState } from "react";
import { wordsArray, initialAlphabets, WordChars } from "./data";

import EndScreen from "./components/Game/EndScreen";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Game from "./components/Game/Game";

import { useGame } from "./components/context/GameProvider";

const App: React.FC = () => {
  const [gameStarted, setGameStarted] = useState(false);
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
  } = useGame();

  function getRandomWord() {
    const filteredWords = wordsArray.filter(
      (word) => word.word.length <= difficulty
    );

    // Make sure filteredWords is not empty
    if (filteredWords.length === 0) {
      console.log("No words found with the current difficulty setting");
      return;
    }

    // Choose a random word from the filtered word candidates
    const chosenWordObject =
      filteredWords[Math.floor(Math.random() * filteredWords.length)];

    if (!chosenWordObject) {
      console.log("Chosen word object is undefined");
      return;
    }

    const chosenWord = chosenWordObject.word;

    if (!chosenWord) {
      console.log("Chosen word is undefined");
      return;
    }

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
        setWrongGuesses((count) => count + 1); // Update wrongGuesses here
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
      .toUpperCase(); // Convert to uppercase

    console.log(
      `Question Word: ${questionWord} - Guessed Word: ${guessedWord}`
    ); // For testing purposes

    if (guessedWord.toUpperCase() === questionWord) {
      setWinOrLose("win");
    } else {
      setWinOrLose("lose");
    }
  }

  function startNewGame() {
    setGameStarted(true);
    getRandomWord();
  }

  function resetGame() {
    setGameStarted(false);
    setGuessCount(0);
    setGuessedWord("");
    setWinOrLose("");
    setRandomWordChars([]);
    setAlphabets(initialAlphabets);
    setWrongGuesses([]);
  }

  return (
    <div className="App">
      <Header />
      {!gameStarted && (
        <Menu
          playerName={playerName}
          setPlayerName={setPlayerName}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          startNewGame={startNewGame}
        />
      )}
      // In App.tsx // ...
      {gameStarted && (
        <Game
          randomWordChars={randomWordChars}
          alphabets={alphabets}
          handleCharGuess={handleCharGuess}
          handleWordGuess={handleWordGuess}
          guessedWord={guessedWord}
          setGuessedWord={setGuessedWord}
          winOrLose={winOrLose}
          resetGame={resetGame}
          guessCount={guessCount} // <-- Add this
        />
      )}
      // ...
      {(winOrLose === "win" || winOrLose === "lose") && (
        <EndScreen winOrLose={winOrLose} newGame={resetGame} />
      )}
    </div>
  );
};

export default App;
