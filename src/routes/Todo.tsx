import { useState } from "react";
import "../components/Todo.css";
import backgroundPic2 from "../image/backgroundPic.jpg";
import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
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
        style={{
          backgroundImage: `url(${backgroundPic2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1>Todo list</h1>
        <input
          type="text"
          onChange={handleClickChange}
          value={task}
          id="input input-data"
          style={{ backgroundColor: "gold", height: "2rem", width: "25rem" }}
        />
        <button onClick={AddTodo}>Enter</button>
        <div>
          <ol>
            {todo.map((item, index) => (
              <li key={index}>
                <span className="todoItem">
                  {item}
                  <i
                    className="fa-solid fa-trash"
                    style={{ marginLeft: "25px", color: "#3D5300" }}
                    onClick={() => deleteTask(index)}
                  >
                    <span
                      style={{
                        color: "red",
                        fontSize: "16px",
                        fontFamily: "aerial",
                      }}
                    >
                      Delete
                    </span>
                  </i>
                  <i
                    className="fa-regular fa-circle-up"
                    style={{ marginLeft: "10px" }}
                    onClick={() => moveUp(index)}
                  >
                    <span
                      style={{
                        color: "green",
                        fontSize: "16px",
                        fontFamily: "aerial",
                      }}
                    >
                      Move Up
                    </span>{" "}
                  </i>
                  <i
                    className="fa-regular fa-circle-down"
                    style={{ marginLeft: "10px" }}
                  >
                    <span
                      style={{
                        color: "green",
                        fontSize: "16px",
                        fontFamily: "aerial",
                      }}
                    >
                      Move Down
                    </span>
                  </i>

                  {/* <button onClick={() => deleteTask(index)}>Delete</button>
                  <button onClick={() => moveUp(index)}>Move Up</button>
                  <button onClick={() => moveDown(index)}>MoveDown</button> */}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div>
        <button type="button" className="btn btn-primary">
          Primary
        </button>
      </div>
    </>
  );
};

export default Todo;
