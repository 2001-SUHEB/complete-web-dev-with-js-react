import { useState, useCallback } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export default function App() {
  const [count, setCount] = useState(0);

  // Memoized increment function
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div className="container mt-5">
      <h1 className="text-center">{count}</h1>
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary" onClick={increment}>
          Increment
        </button>
      </div>
    </div>
  );
}
