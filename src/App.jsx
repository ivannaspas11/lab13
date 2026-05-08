import "./styles.css";
import TodoApp from "./components/TodoApp/TodoApp.jsx";
import ShoppingApp from "./components/ShoppingApp/ShoppingApp.jsx";
import ImageGalleryApp from "./components/ImageGallery/ImageGalleryApp.jsx";
import KanbanBoardApp from "./components/KanbanBoard/KanbanBoardApp.jsx";

function App() {
  return (
    <div className="app-container">
      <h1 style={{ textAlign: "center" }}>
        Лабораторна робота: React Застосунки
      </h1>
      <TodoApp />
      <ShoppingApp />
      <ImageGalleryApp />
      <KanbanBoardApp />
    </div>
  );
}

export default App;
