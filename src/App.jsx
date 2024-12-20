import { useState } from "react";
import clsx from "clsx";
import CurrentWord from "./Components/CurrentWord/CurrentWord";
import GameStatus from "./Components/GameStatus/GameStatus";
import Header from "./Components/Header/Header";
import PeopleSection from "./Components/PeopleSection/PeopleSection";
import Keyboard from "./Components/Keyboard/Keyboard";
import { getRandomWord } from "./utils/utils.js";
import Confetti from "react-confetti";

const App = () => {
  const [currentWordState, setCurrentWordState] = useState(getRandomWord());
  const [guessLetters, setGuessLetters] = useState([]);
  const alphabet = "qwertyuiopasdfghjklzxcvbnm";

  const keyboardElements = alphabet.split("").map((letter, index) => {
    const isGuessed = guessLetters.includes(letter);
    const isCorrect = isGuessed && currentWordState.includes(letter);
    const isWrong = isGuessed && !currentWordState.includes(letter);

    const className = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });

    return (
      <button
        key={index}
        className={`key ${className}`}
        onClick={() => guessLetter(letter)}
        disabled={isGuessed} // Disable button if already guessed
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  const wrongGuesses = guessLetters.filter(
    (letter) => !currentWordState.includes(letter)
  ).length;

  const currectGuesses = guessLetters.filter((letter) =>
    currentWordState.includes(letter)
  ).length;

  const isGameLost = wrongGuesses >= 8;
  const isGameWon = currentWordState
    .split("")
    .every((letter) => guessLetters.includes(letter));
  const isGameOver = isGameLost || isGameWon;
  const lastGuessLetter = guessLetter[guessLetters.length - 1];
  const isLastGuessIncorrect =
    !currentWordState.includes(lastGuessLetter) && guessLetters.length > 0;

  const letterElements = currentWordState.split("").map((letter, index) => {
    const revealLetter = isGameOver || guessLetters.includes(letter);

    return (
      <div key={index} className="letter">
        {revealLetter ? letter : "_"}
      </div>
    );
  });

  function guessLetter(letter) {
    setGuessLetters((prev) => {
      return prev.includes(letter) ? prev : [...prev, letter];
    });
  }

  function newGame() {
    setCurrentWordState(getRandomWord());
    setGuessLetters([]);
  }

  return (
    <>
      <main>
        {isGameWon && <Confetti recycle={false} numberOfPieces={1000} />}

        <Header />
        <GameStatus
          isGameOver={isGameOver}
          isGameLost={isGameLost}
          isGameWon={isGameWon}
          isLastGuessIncorrect={isLastGuessIncorrect}
          wrongGuesses={wrongGuesses}
          currentWordState={currentWordState}
          currectGuesses={currectGuesses}
        />
        <PeopleSection wrong={wrongGuesses} />
        <CurrentWord letterElements={letterElements} />

        <Keyboard keyboardElements={keyboardElements} disabled={isGameOver} />

        <div className="reset">
          {isGameOver && (
            <button className="btn" onClick={newGame}>
              New Game
            </button>
          )}
          {guessLetters.length > 0 && !isGameOver && (
            <button className="btn" onClick={newGame}>
              Reset Game
            </button>
          )}
        </div>
      </main>
    </>
  );
};

export default App;
