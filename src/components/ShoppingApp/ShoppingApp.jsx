import { useState } from "react";
import ShoppingItem from "./ShoppingItem";

export default function ShoppingApp() {
  const [items, setItems] = useState([]);
  const [newItemName, setNewItemName] = useState("");

  const addItem = (e) => {
    e.preventDefault();
    if (!newItemName.trim()) return;
    setItems([
      ...items,
      { id: Date.now(), name: newItemName, quantity: 1, checked: false },
    ]);
    setNewItemName("");
  };

  const updateQuantity = (id, delta) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + delta } : item
      )
    );
  };

  const toggleItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const totalItems = items
    .filter((item) => !item.checked)
    .reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="task-card">
      <h2>2. Список покупок</h2>
      <form onSubmit={addItem} style={{ marginBottom: "15px" }}>
        <input
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          placeholder="Назва товару..."
        />
        <button type="submit">Додати</button>
      </form>

      {items.map((item) => (
        <ShoppingItem
          key={item.id}
          item={item}
          onUpdateQuantity={updateQuantity}
          onToggle={toggleItem}
        />
      ))}

      <h3>Загальна кількість одиниць: {totalItems}</h3>
    </div>
  );
}
