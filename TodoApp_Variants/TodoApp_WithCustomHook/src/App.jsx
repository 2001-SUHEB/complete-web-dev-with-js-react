import useTodo from "./useTodo";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const { todos, input, deleteTodo, add, edit, handleChange } = useTodo();

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Todo Application Using Custom Hooks</h1>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          {/* Input and Add button */}
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              onChange={handleChange}
              value={input}
              placeholder="Enter a task"
            />
            <div className="input-group-append">
              <button onClick={add} className="btn btn-primary mx-2">
                Add
              </button>
            </div>
          </div>

          {/* Task List */}
          <ul className="list-group">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {todo.task}
                <div>
                  <button
                    onClick={() => edit(todo.id)}
                    className="btn btn-info btn-sm mr-2 mx-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="btn btn-danger btn-sm"
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
