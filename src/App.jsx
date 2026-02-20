import { useState, useReducer } from "react";
import "./App.css";

// ─── Reducer ────────────────────────────────────────────────────────────────
function groceryReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), name: action.payload, checked: false }];
    case "DELETE":
      return state.filter((item) => item.id !== action.payload); // filter
    case "UPDATE":
      return state.map((item) =>                                  // map
        item.id === action.payload.id ? { ...item, name: action.payload.name } : item
      );
    case "TOGGLE":
      return state.map((item) =>
        item.id === action.payload ? { ...item, checked: !item.checked } : item
      );
    default:
      return state;
  }
}

// ─── GroceryItem Component ───────────────────────────────────────────────────
function GroceryItem({ item, onDelete, onUpdate, onToggle }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(item.name);

  function handleSave() {
    if (draft.trim()) {
      onUpdate(item.id, draft.trim());
      setEditing(false);
    }
  }

  return (
    <li className={`grocery-item ${item.checked ? "checked" : ""}`}>
      {/* Checkbox */}
      <button
        className={`check-btn ${item.checked ? "check-btn--active" : ""}`}
        onClick={() => onToggle(item.id)}
        aria-label="Toggle checked"
      >
        {item.checked && <span>✓</span>}
      </button>

      {/* Name / Edit field */}
      {editing ? (
        <input
          className="edit-input"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSave()}
          autoFocus
        />
      ) : (
        <span className={`item-name ${item.checked ? "item-name--checked" : ""}`}>
          {item.name}
        </span>
      )}

      {/* Action buttons */}
      <div className="item-actions">
        {editing ? (
          <>
            <button className="btn btn--save" onClick={handleSave}>Save</button>
            <button className="btn btn--cancel" onClick={() => { setEditing(false); setDraft(item.name); }}>Cancel</button>
          </>
        ) : (
          <>
            <button className="btn btn--edit" onClick={() => setEditing(true)}>Edit</button>
            <button className="btn btn--delete" onClick={() => onDelete(item.id)}>✕</button>
          </>
        )}
      </div>
    </li>
  );
}

// ─── Initial Data ─────────────────────────────────────────────────────────────
const INITIAL = [
  { id: 1, name: "🥑 Avocados", checked: false },
  { id: 2, name: "🥛 Whole Milk", checked: false },
  { id: 3, name: "🍞 Sourdough Bread", checked: true },
];

// ─── App ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [items, dispatch] = useReducer(groceryReducer, INITIAL);
  const [input, setInput] = useState("");

  function handleAdd() {
    const trimmed = input.trim();
    if (!trimmed) return;
    dispatch({ type: "ADD", payload: trimmed });
    setInput("");
  }

  // reduce: count unchecked items
  const remaining = items.reduce((acc, item) => acc + (item.checked ? 0 : 1), 0);

  return (
    <div className="page">
      <div className="card">
        {/* Header */}
        <div className="card__header">
          <h1 className="card__title">🛒 Grocery List</h1>
          <p className="card__subtitle">
            {remaining} item{remaining !== 1 ? "s" : ""} remaining · {items.length} total
          </p>
        </div>

        {/* Add input */}
        <div className="add-bar">
          <input
            className="add-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
            placeholder="Add an item… (press Enter)"
          />
          <button className="add-btn" onClick={handleAdd} aria-label="Add item">
            +
          </button>
        </div>

        {/* List */}
        <div className="list-container">
          {items.length === 0 ? (
            <p className="empty-msg">Your list is empty. Add something above! 🌿</p>
          ) : (
            <ul className="grocery-list">
              {items.map((item) => (
                <GroceryItem
                  key={item.id}
                  item={item}
                  onDelete={(id) => dispatch({ type: "DELETE", payload: id })}
                  onUpdate={(id, name) => dispatch({ type: "UPDATE", payload: { id, name } })}
                  onToggle={(id) => dispatch({ type: "TOGGLE", payload: id })}
                />
              ))}
            </ul>
          )}

          {items.length > 0 && (
            <p className="summary">✅ {items.length - remaining} checked off</p>
          )}
        </div>
      </div>
    </div>
  );
}

