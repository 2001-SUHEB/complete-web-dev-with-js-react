import useCounter from "./useCounter";

export default function App() {
  const { increment, decrement, reset, count } = useCounter(0);

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Counter Using Custom Hook</h1>
      <h2 className="mb-4 display-4">{count}</h2>
      <div>
        <button onClick={increment} className="btn btn-primary me-2">
          Increment
        </button>
        <button onClick={decrement} className="btn btn-danger me-2">
          Decrement
        </button>
        <button onClick={reset} className="btn btn-warning">
          Reset
        </button>
      </div>
    </div>
  );
}
