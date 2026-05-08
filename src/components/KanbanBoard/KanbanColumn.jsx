import KanbanTask from "./KanbanTask";

export default function KanbanColumn({ title, tasks, onMove }) {
  return (
    <div
      style={{
        flex: 1,
        border: "1px solid #ddd",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      <h3 style={{ textAlign: "center" }}>{title}</h3>
      {tasks.map((task) => (
        <KanbanTask key={task.id} task={task} onMove={onMove} />
      ))}
      {tasks.length === 0 && (
        <p style={{ textAlign: "center", color: "#888" }}>Немає задач</p>
      )}
    </div>
  );
}
