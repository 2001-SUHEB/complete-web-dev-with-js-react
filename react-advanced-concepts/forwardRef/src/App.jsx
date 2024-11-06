import { useRef } from "react";
import Child from "./Child";
import 'bootstrap/dist/css/bootstrap.min.css';  // Ensure Bootstrap is imported

export default function App() {
  const inputRef = useRef(null); // Create a ref to interact with the child input

  const handleClick = () => {
    inputRef.current.focus(); // Focus the input field in the Child component
  };

  return (
    <div className="container mt-5">
      <h2>Focus Input Example</h2>
      <Child ref={inputRef} placeholder="i am from child component"/>
      <button onClick={handleClick} className="btn btn-primary mt-3">
        Click to focus the child component input field
      </button>
    </div>
  );
}
