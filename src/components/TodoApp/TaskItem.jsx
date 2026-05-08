export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li
      className="task-item"
      style={{ display: "flex", gap: "10px", marginBottom: "8px" }}
    >
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
        onClick={() => onToggle(task.id)}
      >
        {task.text}
      </span>
      <button onClick={() => onDelete(task.id)}>Видалити</button>
    </li>
  );
}
