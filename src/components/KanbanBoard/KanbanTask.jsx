export default function KanbanTask({ task, onMove }) {
  return (
    <div
      style={{
        border: "1px solid #999",
        padding: "10px",
        margin: "10px 0",
        borderRadius: "4px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <p style={{ margin: "0 0 10px 0" }}>{task.text}</p>
      <button onClick={() => onMove(task.id)}>
        {task.status === "todo" ? "В процесі ➔" : "⬅ До виконання"}
      </button>
    </div>
  );
}
