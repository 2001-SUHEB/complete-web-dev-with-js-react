import { useState } from "react";

const useTodo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const add = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setTodos([...todos, { task: input, id: Date.now() }]);
      setInput("");
    } else {
      alert("Please enter a task");
      return;
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => id !== todo.id));
  };

  const edit = (id) => {
    const task = todos.find((todo) => id === todo.id);
    const newTask = prompt("Edit Task", task.task);
    if (newTask.trim()) {
      setTodos(
        todos.map((todo) => (id === todo.id ? { task: newTask, id: id } : todo))
      );
    } else {
      alert("Please enter a task");
      edit(id);
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return { todos, input, deleteTodo, add, edit, handleChange };
};

export default useTodo;
