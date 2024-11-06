import { useDispatch, useSelector } from "react-redux";

import { increment, decrement, setName, setAge } from "./actions";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useRef } from "react";

export default function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const { name, age } = useSelector((state) => state.user);

  //  const renderCount = useRef(0);
  //  renderCount.current++;
  //  console.log(renderCount.current);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setName(e.target.name.value));
    dispatch(setAge(e.target.age.value));
    alert(`name: ${name}, age: ${age}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      dispatch(setName(value));
    }
    if (name === "age") {
      dispatch(setAge(value));
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">{count}</h1>
      <div className="d-flex justify-content-center mb-3">
        <button
          className="btn btn-primary me-2"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>

      <form onSubmit={handleSubmit} className="p-4 border rounded">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age:
          </label>
          <input
            type="number"
            name="age"
            className="form-control"
            value={age}
            onChange={handleChange}
          />
        </div>
        <div className="">
          {name}
          {age}
        </div>

        <button type="submit" className="btn btn-success w-100">
          Submit
        </button>
      </form>
    </div>
  );
}
