import React, { useState } from "react";
import { wordsArray, initialAlphabets, WordChars } from "./data";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Game from "./components/Game/Game";
import { useGame } from "./components/context/GameProvider";

const App: React.FC = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [wordLength, setWordLength] = useState(10);
  const [randomWordChars, setRandomWordChars] = useState<WordChars[]>([]);
  const [alphabets, setAlphabets] = useState(initialAlphabets);

  const { guessCount, setGuessCount } = useGame();

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

  // Display the alphabet buttons that player uses to guess the word
  const alphabetsDisplay = alphabets.map((alphabet) => (
    <button
      onClick={handleGuess}
      disabled={alphabet.isGuessed}
      className={`alphabet-btn ${alphabet.isGuessed ? "guessed" : ""}`}
      key={alphabet.letter}
    >
      {alphabet.letter}
    </button>
  ));

  // Display the word that player is trying to guess as individual characters
  const wordChars = randomWordChars.map(
    (charObj: { letter: string; isVisible: boolean }, index: number) => (
      <div key={charObj.letter + index} className="guess-letter">
        {charObj.isVisible ? charObj.letter : "_"}
      </div>
    )

    // Check matched
  );

  return (
    <div className="App">
      <Header />
      {gameStarted ? (
        <Game wordChars={wordChars} alphabetsDisplay={alphabetsDisplay} />
      ) : (
        <Menu handleStartGame={handleStartGame} setWordLength={setWordLength} />
      )}
    </div>
  );
};

export default App;
