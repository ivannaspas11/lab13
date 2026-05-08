import { useState } from "react";
import KanbanColumn from "./KanbanColumn";

const INITIAL_TASKS = [
  { id: 1, text: "Вивчити React", status: "todo" },
  { id: 2, text: "Налаштувати Vite", status: "in-progress" },
  { id: 3, text: "Задеплоїти на GitHub", status: "todo" },
];

export default function KanbanBoardApp() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  const moveTask = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            status: task.status === "todo" ? "in-progress" : "todo",
          };
        }
        return task;
      })
    );
  };

  const todoTasks = tasks.filter((t) => t.status === "todo");
  const inProgressTasks = tasks.filter((t) => t.status === "in-progress");

  return (
    <div className="task-card">
      <h2>11. Міні Kanban-дошка</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <KanbanColumn
          title="До виконання"
          tasks={todoTasks}
          onMove={moveTask}
        />
        <KanbanColumn
          title="В процесі"
          tasks={inProgressTasks}
          onMove={moveTask}
        />
      </div>
    </div>
  );
}
