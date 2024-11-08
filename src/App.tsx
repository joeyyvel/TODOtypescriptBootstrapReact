import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([
    "Do the gym routine",
    "Clean the Room",
    "Walk the dog",
  ]);
  const [task, setTask] = useState("");

  const handleClickChange = (e) => {
    setTask(e.target.value);
  };

  const AddTodo = () => {
    if (task.trim() !== "") {
      setTodo((t) => [...t, task]);
      setTask("");
    }
  };

  function deleteTask(index) {
    const updatedTask = todo.filter((_, i) => i !== index);
    setTodo(updatedTask);
  }

  function moveUp(index) {
    if (index > 0) {
      const updatedTask = [...todo];
      [updatedTask[index], updatedTask[index - 1]] = [
        updatedTask[index - 1],
        updatedTask[index],
      ];
      setTodo(updatedTask);
    }
  }

  function moveDown(index) {
    if (index < todo.length - 1) {
      const updatedTask = [...todo];
      [updatedTask[index], updatedTask[index + 1]] = [
        updatedTask[index + 1],
        updatedTask[index],
      ];
      setTodo(updatedTask);
    }
  }

  return (
    <>
      <div className="container">
        <h1>Todo list</h1>
        <input type="text" onChange={handleClickChange} value={task} />
        <button onClick={AddTodo}>Enter</button>
        <div>
          <ol>
            {todo.map((item, index) => (
              <li key={index}>
                <span>{item}</span>
                <button onClick={() => deleteTask(index)}>Delete</button>
                <button onClick={() => moveUp(index)}>Move Up</button>
                <button onClick={() => moveDown(index)}>MoveDown</button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
