import { useState } from "react";
import "../components/Todo.css";
import todoPicture from "../image/todoPicture.jpg";
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
          backgroundImage: `url(${todoPicture})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 className="myTodo">To-Do List</h1>

        <div className="inputClass" style={{ display: "flex" }}>
          <input
            type="text"
            onChange={handleClickChange}
            value={task}
            id="input input-data"
            placeholder="type add todo list here and press Enter..."
            style={{
              backgroundColor: "#CBD2A4",
              height: "3rem",
              fontSize: "23px",
              borderRadius: "5px",
              border: "none",
              flex: "10",
              paddingLeft: "10px",
            }}
          />
          <button className="btnEnter" onClick={AddTodo}>
            Enter
          </button>
        </div>

        <div className="bodyMap" style={{ textAlign: "left" }}>
          {/*--------------- start of mapping the todo list---------------- */}
          <table>
            {todo.map((item, index) => (
              <li key={index}>
                <span
                  className="todoItem"
                  // creating alert
                  onClick={() => alert("hello world!")}
                >
                  {item}
                  <i
                    className="fa-solid fa-trash"
                    style={{
                      marginLeft: "40px",
                      color: "#EE4E4E",
                      cursor: "pointer",
                    }}
                    onClick={() => deleteTask(index)}
                  >
                    <span
                      style={{
                        color: "red",
                        fontSize: "12px",
                        fontFamily: "aerial",
                      }}
                    >
                      Delete
                    </span>
                  </i>
                  <i
                    className="fa-regular fa-circle-up"
                    style={{
                      marginLeft: "20px",
                      color: "blue",
                      cursor: "pointer",
                    }}
                    onClick={() => moveUp(index)}
                  >
                    <span
                      style={{
                        color: "blue",
                        fontSize: "12px",
                        fontFamily: "aerial",
                      }}
                    >
                      Up
                    </span>{" "}
                  </i>
                  {/* icon move down */}
                  <i
                    className="fa-regular fa-circle-down"
                    style={{
                      marginLeft: "20px",
                      color: "violet",
                      cursor: "pointer",
                    }}
                    onClick={() => moveDown(index)}
                  >
                    <span
                      style={{
                        color: "black",
                        fontSize: "12px",
                        fontFamily: "aerial",
                      }}
                    >
                      Down
                    </span>
                  </i>

                  {/* <button onClick={() => deleteTask(index)}>Delete</button>
                  <button onClick={() => moveUp(index)}>Move Up</button>
                  <button onClick={() => moveDown(index)}>MoveDown</button> */}
                </span>
              </li>
              // the end of map list
            ))}
          </table>
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
