import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NestedFormObject() {
  const [data, setData] = useState({
    name: "",
    Football: {
      title: "",
      city: "",
      imageUrl: ""
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setData((data) => ({
        ...data,
        [name]: value
      }));
    } else {
      setData((data) => ({
        ...data,
        Football: {
          ...data.Football,
          [name]: value
        }
      }));
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="container p-4 border rounded shadow bg-white" style={{ maxWidth: "500px", width: "100%" }}>
        <form onSubmit={(e) => e.preventDefault()} className="mb-4">
          <h3 className="text-center mb-4">Football Information Form</h3>
          
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={data.name}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter name"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={data.Football.title}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter title"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="city" className="form-label">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={data.Football.city}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter city"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="imageUrl" className="form-label">Image URL:</label>
            <input
              type="url"
              id="imageUrl"
              name="imageUrl"
              value={data.Football.imageUrl}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter image URL"
              required
            />
          </div>
        </form>

        <div className="text-center">
          <h5>Preview</h5>
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Title:</strong> {data.Football.title}</p>
          <p><strong>City:</strong> {data.Football.city}</p>
          {data.Football.imageUrl && (
            <img
              src={data.Football.imageUrl}
              alt="Football"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "200px" }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
