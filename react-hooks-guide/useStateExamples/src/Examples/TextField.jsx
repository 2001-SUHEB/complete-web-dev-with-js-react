import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

export default function TextField() {
  const [text, setText] = useState("hello suheb");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setText("hello suheb"); // Reset text to the original value
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
      <form onSubmit={handleSubmit} className="text-center border p-4 rounded shadow bg-white" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="mb-3">Text Input Form</h3>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            value={text}
            onChange={handleChange}
            placeholder="Type something..."
            required
          />
        </div>
        <p className="my-2"><strong>Current Text:</strong> {text}</p>
        <button type="submit" className="btn btn-primary w-100">Reset</button>
      </form>
    </div>
  );
}
