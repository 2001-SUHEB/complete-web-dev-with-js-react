import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export default function UseRef() {
  const nameRef = useRef(""); // Ref for the input field
  const countRef = useRef(0); // Ref for the counter
  const countDisplayRef = useRef(null); // Ref for displaying the count

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, ${nameRef.current.value}!`); // Alert with the name
    nameRef.current.focus(); // Focus on the input field when the form is submitted
  };
useEffect(()=>{
    console.log("renderd") //will not re render since we are using useRef
    
})

  const handleIncrement = () => {
     
    countRef.current += 1; // Increment the counter
    // Update the displayed count
    if (countDisplayRef.current) {
      countDisplayRef.current.textContent = `Count: ${countRef.current}`; // Update the count display
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">UseRef Example with Bootstrap</h2>
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input 
            type="text" 
            id="name" 
            ref={nameRef} 
            className="form-control" 
            placeholder="Enter your name"
          />
        </div>
        <h2 ref={countDisplayRef}>Count: {countRef.current}</h2> {/* Display the current count */}

        <button type="button" onClick={handleIncrement} className="btn btn-primary me-2">
          Increment
        </button>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    </div>
  );
}
