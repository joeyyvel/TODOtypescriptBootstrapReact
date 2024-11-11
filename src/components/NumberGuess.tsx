import scorePicture from "../image/score.svg";
import firstPicture from "../image/firstPlace.svg";
import "./NumberGuess.css";
import { useState } from "react";

export const NumberGuess = () => {
  const guessNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(guessNumber);
  let score = 20;
  const highScore = 20;

  const [num, setNum] = useState("");

  const handleClick = (e) => {
    setNum(e.target.value);
  };

  const funcNum = () => {
    alert("You entered " + +num);
  };

  return (
    <>
      <header>
        <h1 className="guessHeader">Guess hidden Number.</h1>
        <p className="between">(Between 1 and 20)</p>
        <button className="btn again">Again!</button>
        <div className="number">?</div>
      </header>

      <main>
        <section className="left">
          {/*------------- input value------------ */}
          <input
            type="input"
            value={num}
            onChange={handleClick}
            autoComplete="off"
            className="guess"
            style={{ backgroundColor: "orange" }}
          />
          <button className="btn check" onClick={funcNum}>
            Check!
          </button>
        </section>

        <section className="right">
          <p className="message">Start guessing...</p>
          <p className="label-score">
            <img
              src={scorePicture}
              height={"30px"}
              style={{ marginRight: "10px" }}
              alt=""
            />
            Score: <span className="score">20</span>
          </p>
          <p className="label-highScore">
            <img
              src={firstPicture}
              height={"30px"}
              style={{ marginRight: "10px" }}
              alt=""
            />
            HighScore:<span className="highScore">0</span>
          </p>
        </section>
      </main>
    </>
  );
};
