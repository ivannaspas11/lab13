export default function ShoppingItem({ item, onUpdateQuantity, onToggle }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "8px",
      }}
    >
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => onToggle(item.id)}
      />
      <span
        style={{
          textDecoration: item.checked ? "line-through" : "none",
          minWidth: "120px",
        }}
      >
        {item.name}
      </span>
      <button
        onClick={() => onUpdateQuantity(item.id, -1)}
        disabled={item.quantity <= 1}
      >
        -
      </button>
      <span>{item.quantity}</span>
      <button onClick={() => onUpdateQuantity(item.id, 1)}>+</button>
    </div>
  );
}
