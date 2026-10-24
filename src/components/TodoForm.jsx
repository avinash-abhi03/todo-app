
import { useState } from "react";

function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const task = text.trim();

    if (!task) return;

    onAdd(task);
    setText("");
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={text}
        onChange={(event) => setText(event.target.value)}
        aria-label="New task"
      />

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TodoForm;
