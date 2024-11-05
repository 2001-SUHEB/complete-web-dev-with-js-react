import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <h1 className="text-center mb-4 display-4">{count}</h1>
      <button className="btn btn-primary btn-lg" onClick={handleClick}>
        You pressed me {count} times
      </button>
    </div>
  );
}
