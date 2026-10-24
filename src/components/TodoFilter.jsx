
function TodoFilter({ filter, setFilter, remaining }) {
  const filters = ["all", "active", "completed"];

  return (
    <div className="todo-footer">
      <span>{remaining} tasks left</span>

      <div className="filter-buttons">
        {filters.map((item) => (
          <button
            key={item}
            className={filter === item ? "selected" : ""}
            onClick={() => setFilter(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TodoFilter;
