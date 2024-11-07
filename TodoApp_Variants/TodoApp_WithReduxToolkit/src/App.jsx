import  { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, deleteTodo, edit } from "./todoSlice"; // Import actions from todoSlice
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [newTodo, setNewTodo] = useState("");
  const todos = useSelector((state) => state.todos); // Get todos from the Redux store
  const dispatch = useDispatch(); // Get the dispatch function to dispatch actions

  // Handle adding a todo
  const handleAdd = () => {
    if (newTodo.trim()) {
      dispatch(add(newTodo));
      setNewTodo(""); // Reset input after adding
    }
  };

  // Handle editing a todo
  const handleEdit = (id) => {
    const newTitle = prompt("Edit your todo", todos.find((todo) => todo.id === id).title);
    if (newTitle && newTitle.trim()) {
      dispatch(edit({ id, title: newTitle }));
    }
  };

  // Handle deleting a todo
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Todo Application Using Redux Toolkit</h1>

      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Enter a task"
            />
            <div className="input-group-append">
              <button className="btn btn-primary" onClick={handleAdd}>
                Add
              </button>
            </div>
          </div>

          <h2>Todo List</h2>
          <ul className="list-group">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {todo.title}
                <div>
                  <button
                    className="btn btn-info btn-sm mr-2"
                    onClick={() => handleEdit(todo.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(todo.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
