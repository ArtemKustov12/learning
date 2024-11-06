import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList items={items} />
      <Steps />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 👜</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");

  const [quantity, setQuantity] = useState(1);
  const handleChangeItems = (e) => setQuantity(Number(e.target.value));

  function handleSubmit(event) {
    event.preventDefault();

    if (!description.trim()) {
      return;
    }

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log("newItem", newItem);

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip</h3>
      <select value={quantity} onChange={handleChangeItems}>
        {Array.from({ length: 20 }, (_, i) => (
          <option key={i}>{i + 1}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description}, {item.quantity}
      </span>
      <button>❌</button>
    </li>
  );
}

function Steps() {
  return (
    <footer className="stats">
      <em>You have X items on your list and you already packed Y items (Z%)</em>
    </footer>
  );
}
