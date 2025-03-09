import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTask, setTask, editTask } from "./reducer/TodoSlice";

function App() {
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  const todoList = useSelector((state) => state.todo.todo);
  const dispatch = useDispatch();

  const addOrUpdateTask = () => {
    if (input.trim() === "") return;

    if (editId !== null) {
      // If editing, update the task
      dispatch(editTask({ id: editId, newTask: input }));
      setEditId(null); // Exit edit mode
    } else {
      // Otherwise, add a new task
      dispatch(setTask(input));
    }
    setInput(""); // Clear input field after action
  };

  const removeTodo = (id) => {
    dispatch(removeTask(id));
  };

  const editTodo = (id, task) => {
    setEditId(id); // Set ID of task being edited
    setInput(task); // Populate input field with task text
  };

  return (
    <div className="todo-container">
      <div className="todo-top-section">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addOrUpdateTask}>
          {editId !== null ? "Save" : "Add"}
        </button>
      </div>

      <div>
        {todoList.map((item) => (
          <div key={item.id}>
            {item.text}
            <button onClick={() => removeTodo(item.id)}>Remove</button>
            <button onClick={() => editTodo(item.id, item.text)}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
