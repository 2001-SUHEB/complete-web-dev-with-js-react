import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FormObject() {
  const [data, setData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((data) => ({
      ...data,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hi ${data.name}, your email is ${data.email}`);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form 
        onSubmit={handleSubmit} 
        className="p-4 border rounded shadow bg-light"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h3 className="text-center mb-4">User Form</h3>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input 
            type="text" 
            value={data.name} 
            name="name" 
            onChange={handleChange} 
            className="form-control"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input 
            type="email" 
            value={data.email} 
            name="email" 
            onChange={handleChange} 
            className="form-control"
            placeholder="Enter your email"
            required
          />
        </div>
        <p className="text-center">Hi {data.name}</p>
        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>
    </div>
  );
}
