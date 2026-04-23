import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const API = import.meta.env.VITE_API_URL;

  // 🔹 Fetch items (GET)
  const fetchItems = () => {
    axios.get(`${API}/api/items`)
      .then(res => setItems(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // 🔹 Add item (POST)
  const addItem = () => {
    if (!name || !price || !description) return;

    axios.post(`${API}/api/items`, { name, price, description })
      .then(res => {
        // ✅ OPTION 1 (BEST): update UI instantly
        setItems([...items, res.data]);

        // clear inputs
        setName("");
        setPrice("");
        setDescription("");
      })
      .catch(err => console.log(err));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Item Manager</h1>

      <input
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />

      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />

      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />

      <button onClick={addItem}>Add Item</button>
      <br />
      <br />

      <h2>Items List</h2>

      {items.length === 0 ? (
        <p>No items yet</p>
      ) : (
        <ul>
          {items.map((item, i) => (
            <li key={i}>
              <strong>{item.name}</strong> - Rs.{item.price} <br /> Description:
              <small>{item.description}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;