export const NumberGuess = () => {
  const secretNumber = Math.trunc(Math.random() * 20) + 1;

  console.log(secretNumber);

  return (
    <>
      <header>
        <h1>Guess hidden Number.</h1>
        <p className="between">(Between 1 and 20)</p>
        <button className="btn again">Again!</button>
        <div className="number">?</div>
      </header>

      <main>
        <section className="left">
          <input type="text" id="myVal" autoComplete="off" className="guess" />
          <button className="btn check">Check!</button>
        </section>

        <section className="right">
          <p className="message">Start guessing...</p>
          <p className="label-score">
            {" "}
            Score: <span className="score">20</span>
          </p>
          <p className="label-highScore">
            HighScore:<span className="highScore">0</span>
          </p>
        </section>
      </main>
    </>
  );
};
