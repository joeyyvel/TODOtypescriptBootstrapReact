import { useState } from "react";
import "../components/Todo.css";
import backgroundPic from "../image/backgroundPicture.jpg";
import backgroundPic2 from "../image/backgroundPic.jpg";

const Todo = () => {
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
      <div
        className="container"
        style={{ backgroundImage: `url(${backgroundPic2})` }}
      >
        <h1>Todo list</h1>
        <input type="text" onChange={handleClickChange} value={task} />
        <button onClick={AddTodo}>Enter</button>
        <div>
          <ol>
            {todo.map((item, index) => (
              <li key={index}>
                <span className="todoItem">
                  {item}
                  <button
                    className="btn btn_delete"
                    onClick={() => deleteTask(index)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn_moveUp"
                    onClick={() => moveUp(index)}
                  >
                    Move Up
                  </button>
                  <button
                    className="btn btn_moveDown"
                    onClick={() => moveDown(index)}
                  >
                    MoveDown
                  </button>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Todo;
