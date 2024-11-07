import { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Include Bootstrap for styling

const App = () => {
  const initialState = {
    todos: [],
    input: "",
    isediting: null,
  };

  const todoReducer = (state, action) => {
    switch (action.type) {
      case "add":
        if (!state.input.trim()) return state;
        return {
          ...state,
          todos: [...state.todos, { task: state.input, id: Date.now() }],
          input: "",
        };
      case "set":
        return {
          ...state,
          input: action.payload,
        };
      case "edit": {
        const todoToEdit = state.todos.find((todo) => todo.id === action.payload);
        return {
          ...state,
          input: todoToEdit.task, // Set the input to the current task for editing
          isediting: action.payload, // Track which todo is being edited
        };
      }
      case "saveEdit": {
        // If there's no input or it is trimmed to empty, don't save
        if (!state.input.trim()) return state;
        
        // Update the todo with the new task
        const updatedTodos = state.todos.map((todo) =>
          todo.id === state.isediting ? { ...todo, task: state.input.trim() } : todo
        );
        return {
          ...state,
          todos: updatedTodos,
          input: "", // Clear the input field
          isediting: null, // Reset editing state
        };
      }
      case "delete":
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.payload),
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Todo application using useReducer</h1>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              value={state.input}
              onChange={(e) =>
                dispatch({ type: "set", payload: e.target.value })
              }
              placeholder="Enter a task"
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary"
                onClick={() => {
                  if (state.isediting) {
                    dispatch({ type: "saveEdit" }); // Save the edited task
                  } else {
                    dispatch({ type: "add" }); // Add new task
                  }
                }}
              >
                {state.isediting ? "Save" : "Add"}
              </button>
            </div>
          </div>

          <h2>Todo List</h2>
          <ul className="list-group">
            {state.todos.map((todo) => (
              <li
                key={todo.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {todo.task}
                <div>
                  <button
                    className="btn btn-info btn-sm mr-2"
                    onClick={() => dispatch({ type: "edit", payload: todo.id })}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() =>
                      dispatch({ type: "delete", payload: todo.id })
                    }
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
