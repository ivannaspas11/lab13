import "./styles.css";
import TodoApp from "./components/TodoApp/TodoApp";
import ShoppingApp from "./components/ShoppingApp/ShoppingApp";
import ImageGalleryApp from "./components/ImageGallery/ImageGalleryApp";
import KanbanBoardApp from "./components/KanbanBoard/KanbanBoardApp";

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
