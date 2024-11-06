import { useState, useReducer } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const initialState = { count: 0 };

  function countReducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: (state.count = 0) };
    }
  }

  const [state, dispatch] = useReducer(countReducer, initialState);

  return (
    <>
      <div className="card">
        <h1>useState Count : {count}</h1>
        <h2>usReducer Count : {state.count}</h2>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => dispatch({ type: "increment" })}>
          useReducer +
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          useReducer -
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>
          useReducer reset
        </button>
      </div>
    </>
  );
}

export default App;
