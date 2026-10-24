
import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("todos")) || [];
    } catch {
      return [];
    }
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo(text) {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };

    setTodos((current) => [...current, newTodo]);
  }

  function toggleTodo(id) {
    setTodos((current) =>
      current.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos((current) =>
      current.filter((todo) => todo.id !== id)
    );
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const remaining = todos.filter(
    (todo) => !todo.completed
  ).length;

  return (
    <main className="app">
      <header className="app-header">
        <p className="eyebrow">MY PRODUCTIVITY SPACE</p>
        <h1>My TODO List</h1>
        <p>Small steps. Big progress.</p>
      </header>

      <section className="todo-card">
        <TodoForm onAdd={addTodo} />

        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />

        <TodoFilter
          filter={filter}
          setFilter={setFilter}
          remaining={remaining}
        />
      </section>

      <footer className="app-note">
        Your tasks stay saved in this browser.
      </footer>
    </main>
  );
}

export default App;
