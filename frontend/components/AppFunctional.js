import React, { useState } from "react";

export default function AppFunctional(props) {
  const [state, setState] = useState({
    x: 2,
    y: 2,
    steps: 0,
    email: "",
    message: "",
  });

  const resetState = () => {
    setState({
      x: 2,
      y: 2,
      steps: 0,
      email: "",
      message: "",
    });
  };

  const updateLocation = (xVar, yVar) => {
    if (state.x + xVar > 3) {
      setState({
        ...state,
        message: "You can't go right",
      });
    } else if (state.x + xVar < 1) {
      setState({
        ...state,
        message: "You can't go left",
      });
    } else if (state.y + yVar > 3) {
      setState({
        ...state,
        message: "You can't go down",
      });
    } else if (state.y + yVar < 1) {
      setState({
        ...state,
        message: "You can't go up",
      });
    } else {
      setState({
        ...state,
        x: state.x + xVar,
        y: state.y + yVar,
        steps: state.steps + 1,
        message: "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:9000/api/result", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then((response) => response.json())
      .then((json) =>
        setState({
          ...state,
          message: json.message,
          email: "",
        })
      )
      .catch((error) => console.error(error));
  };

  const handleChange = (e) => {
    setState({
      ...state,
      email: e.target.value,
    });
  };

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">{`Coordinates (${state.x}, ${state.y}`})</h3>
        {state.steps === 1 ? (
          <h3 id="steps">You moved 1 time</h3>
        ) : (
          <h3 id="steps">You moved {state.steps} times</h3>
        )}
      </div>
      <div id="grid">
        <div
          className={`square ${state.x === 1 && state.y === 1 ? "active" : ""}`}
        >
          {state.x === 1 && state.y === 1 ? "B" : ""}
        </div>
        <div
          className={`square ${state.x === 2 && state.y === 1 ? "active" : ""}`}
        >
          {state.x === 2 && state.y === 1 ? "B" : ""}
        </div>
        <div
          className={`square ${state.x === 3 && state.y === 1 ? "active" : ""}`}
        >
          {state.x === 3 && state.y === 1 ? "B" : ""}
        </div>
        <div
          className={`square ${state.x === 1 && state.y === 2 ? "active" : ""}`}
        >
          {state.x === 1 && state.y === 2 ? "B" : ""}
        </div>
        <div
          className={`square ${state.x === 2 && state.y === 2 ? "active" : ""}`}
        >
          {state.x === 2 && state.y === 2 ? "B" : ""}
        </div>
        <div
          className={`square ${state.x === 3 && state.y === 2 ? "active" : ""}`}
        >
          {state.x === 3 && state.y === 2 ? "B" : ""}
        </div>
        <div
          className={`square ${state.x === 1 && state.y === 3 ? "active" : ""}`}
        >
          {state.x === 1 && state.y === 3 ? "B" : ""}
        </div>
        <div
          className={`square ${state.x === 2 && state.y === 3 ? "active" : ""}`}
        >
          {state.x === 2 && state.y === 3 ? "B" : ""}
        </div>
        <div
          className={`square ${state.x === 3 && state.y === 3 ? "active" : ""}`}
        >
          {state.x === 3 && state.y === 3 ? "B" : ""}
        </div>
      </div>
      <div className="info">
        <h3 id="message">{state.message}</h3>
      </div>
      <div id="keypad">
        <button id="left" onClick={() => updateLocation(-1, 0)}>
          LEFT
        </button>
        <button id="up" onClick={() => updateLocation(0, -1)}>
          UP
        </button>
        <button id="right" onClick={() => updateLocation(1, 0)}>
          RIGHT
        </button>
        <button id="down" onClick={() => updateLocation(0, 1)}>
          DOWN
        </button>
        <button id="reset" onClick={() => resetState()}>
          reset
        </button>
      </div>
      <form>
        <input
          id="email"
          type="email"
          placeholder="type email"
          value={state.email}
          onChange={(e) => handleChange(e)}
        ></input>
        <input
          id="submit"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        ></input>
      </form>
    </div>
  );
}
