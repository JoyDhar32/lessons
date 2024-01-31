import React, { useState } from "react";

const UseStateHooks = () => {
  let [count, setCount] = useState(0);
  let [name, setName] = useState(""); // [state, setState
  return (
    <>
      <div>useStateHooks</div>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text">Small</span>
        <input
          type="text"
          className="form-control"
          plceholder="enter your name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        {" "}
        <span style={{ color: "green", fontWeight: "bold" }}>
          {name}{" "}
        </span>click {count >= 0 ? count : 0} Times
      </div>
      <button onClick={() => setCount((prev) => prev + 1)} className="btn btn-sm btn-primary mt-3">Increment</button>
      &nbsp; &nbsp;
      <button onClick={() => setCount(() => count - 1)} disabled={count <= 0} className="btn btn-sm btn-warning mt-3">
        Decrement
      </button>
    </>
  );
};
export default UseStateHooks;
