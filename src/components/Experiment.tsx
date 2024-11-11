import { useState } from "react";

export const Experiment = () => {
  const [val, setVal] = useState("hello there");
  const click = () => {
    alert(val);
  };
  const change = (event) => {
    setVal(event.target.value);
  };
  //============================================================

  const [task, setTask] = useState<number | string>("");
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <>
      <div className="App">
        <input value={val} onChange={change} />
        <button onClick={click}>click</button>
      </div>
      {/* another label */}
      <br />
      <br />

      <input type="text" value={task} onChange={handleChange} />
      <button onClick={myFunc}>Enter</button>
    </>
  );
};
