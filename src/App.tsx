import Todo from "./routes/Todo";
import { NumberGuess } from "./components/NumberGuess";

function App() {
  return (
    <>
      <NumberGuess />
      <h1 style={{ backgroundColor: "gold", textAlign: "center" }}>
        Hello App!
      </h1>
      <Todo />

      <div></div>
    </>
  );
}

export default App;
