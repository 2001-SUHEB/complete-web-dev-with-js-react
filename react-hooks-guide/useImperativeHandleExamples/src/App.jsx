import {  useRef } from "react";
import Child from "./Child";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export default function App() {
  const parentRef = useRef(null);

  const handleClick = () => {
    parentRef.current.focusInput();
  };

const data =()=>{
  alert(parentRef.current.value);
}

  return (
    <div className="container mt-4">
      <h1 className="mb-3">useImperativeHandle Example</h1>
      <Child ref={parentRef} />
      <button
        className="btn btn-primary mt-2"
        onClick={handleClick}
      >
        Focus Child Component Input
      </button>
      <button className="btn btn-primary mt-2 mx-2"  onClick={data}>parentRef</button>
    </div>
  );
}
