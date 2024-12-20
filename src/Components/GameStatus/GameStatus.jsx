import { people } from "../../utils/people";
import { getFarewellText } from "../../utils/utils";

const GameStatus = ({
  isGameOver,
  isGameWon,
  isLastGuessIncorrect,
  isGameLost,
  wrongGuesses,
  currectGuesses,
}) => {
  function randomGameStatus() {
    if (!isGameOver && isLastGuessIncorrect) {
      return (
        <>
          <div className="gameStatus bg-[#ddd299] text-black">
            {!currectGuesses && (
              <p>{getFarewellText(people[wrongGuesses - 1].name)}</p>
            )}
            <p>You have {8 - wrongGuesses} attempts left.</p>
          </div>
        </>
      );
    }

    if (isGameWon) {
      return (
        <>
          <div className="gameStatus">
            <h2>You Won! 🎉</h2>
            <p>
              Congratulations! You guessed the correct word and saved the
              hostages. 🥁🏆
            </p>
          </div>
        </>
      );
    }

    if (isGameLost) {
      return (
        <>
          <div className="gameStatus bg-red-700">
            <h2>You Lost! 🖕🏻</h2>
            <p>
              Unfortunately, you ran out of attempts. The hostages are now dead.
              <i className="fa-solid fa-skull"></i>
            </p>
          </div>
        </>
      );
    }

    return null;
  }

  return (
    <>
      <section className="gameSection">{randomGameStatus()}</section>
    </>
  );
};

export default GameStatus;
