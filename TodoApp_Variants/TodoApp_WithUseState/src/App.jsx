import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

export default function App() {
  const [Task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [editing, setEditing] = useState(null);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!Task) return; // Prevent adding empty tasks
    setTaskList([...taskList, { todo: Task, id: Date.now() }]);
    setTask("");
  };

  const handleUpdate = () => {
    const updatedTasks = taskList.map((task) => {
      if (task.id === editing) {
        return { ...task, todo: Task };
      }
      return task;
    });
    setTaskList(updatedTasks);
    setEditing(null);
    setTask("");
  };

  const handleDelete = (id) => {
    const updatedTasks = taskList.filter((task) => task.id !== id);
    setTaskList(updatedTasks);
  };

  const handleEdit = (id) => {
    setEditing(id);
    const taskToEdit = taskList.find((task) => task.id === id);
    setTask(taskToEdit.todo);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Todo Application Using useState</h1>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          {/* Input and Add/Update button */}
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              value={Task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter a task"
            />
            <div className="input-group-append">
              {editing ? (
                <button className="btn btn-warning mx-2" onClick={handleUpdate}>
                  Update
                </button>
              ) : (
                <button className="btn btn-primary mx-2" onClick={handleAdd}>
                  Add
                </button>
              )}
            </div>
          </div>

          {/* Task List */}
          <ul className="list-group">
            {taskList.map((task) => (
              <li
                key={task.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {task.todo}
                <div>
                  <button
                    className="btn btn-info btn-sm mr-2"
                    onClick={() => handleEdit(task.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm mx-2"
                    onClick={() => handleDelete(task.id)}
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
}
