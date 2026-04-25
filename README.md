# MERN Item Manager – Full Setup Guide (with GitHub)

This guide covers:

* Creating a MERN project (Node + Express + MongoDB + React)
* Connecting frontend & backend
* Running locally
* **Pushing project to GitHub**

---

# 🚀 1. Project Structure

```bash
mern-item-manager/
 ├── backend/
 └── frontend/
```

---

# 🖥️ 2. Backend Setup (Node + Express + MongoDB)

## Step 1: Create backend

```bash
mkdir backend
cd backend
npm init -y
```

## Step 2: Install dependencies

```bash
npm install express mongoose cors dotenv
```

## Step 3: Create `server.js`

```js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Model
const ItemSchema = new mongoose.Schema({
  name: String,
  price: Number
});
const Item = mongoose.model("Item", ItemSchema);

// Routes
app.get("/api/items", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

app.post("/api/items", async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.json(item);
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

## Step 4: Create `.env`

```bash
MONGO_URI=your_mongodb_connection_string
```

## Step 5: Run backend

```bash
node server.js
```

---

# ⚛️ 3. Frontend Setup (Create React App)

## Step 1: Create React app

```bash
npx create-react-app frontend
cd frontend
```

## Step 2: Install Axios

```bash
npm install axios
```

---

## Step 3: Update `src/App.js`

```jsx
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const API = process.env.REACT_APP_API_URL;

  const fetchItems = () => {
    axios.get(`${API}/api/items`)
      .then(res => setItems(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const addItem = () => {
    axios.post(`${API}/api/items`, { name, price })
      .then(res => {
        setItems([...items, res.data]);
        setName("");
        setPrice("");
      });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Item Manager</h1>

      <input
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={addItem}>Add Item</button>

      <ul>
        {items.map((item, i) => (
          <li key={i}>
            {item.name} - Rs.{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

---

## Step 4: Create `.env` in frontend

```bash
REACT_APP_API_URL=http://localhost:5000
```

## Step 5: Run frontend

```bash
npm start
```

---

# 🔗 4. Connect Frontend & Backend

* Backend runs on: `http://localhost:5000`
* Frontend runs on: `http://localhost:3000`

Make sure:

```js
app.use(cors());
```

---

# 🧪 5. Testing

1. Run backend → `node server.js`
2. Run frontend → `npm start`
3. Add items via UI
4. Check MongoDB → data stored

---

# 🌐 6. GitHub Setup & Push

## Step 1: Create repository

* Go to GitHub
* Click **New Repository**
* Name: `mern-item-manager`
* Set to **Public**
* Do NOT initialize with README

---

## Step 2: Initialize Git in project root

```bash
git init
```

---

## Step 3: Create `.gitignore`

```bash
node_modules
.env
```

---

## Step 4: Add & commit

```bash
git add .
git commit -m "initial commit"
```

---

## Step 5: Connect to GitHub repo

```bash
git remote add origin https://github.com/your-username/mern-item-manager.git
```

---

## Step 6: Push code

```bash
git branch -M main
git push -u origin main
```

---

## Step 7: Update code later

```bash
git add .
git commit -m "update project"
git push
```

---

# ⚠️ Important Notes

* Do NOT upload:

```bash
node_modules/
.env
```

* Always run before starting:

```bash
npm install
```

---

# 🌐 7. Deployment Notes

## Backend (Railway / Render)

* Add:

```bash
MONGO_URI=your_mongodb_url
```

## Frontend (Vercel / Netlify)

* Add:

```bash
REACT_APP_API_URL=https://your-backend-url
```

---

# ⚠️ Common Errors

* Axios not installed → `npm install axios`
* API still localhost → update URL after deploy
* MongoDB connection failed → check `.env`
* CORS error → add `app.use(cors())`

---

# ✅ Final Checklist

* Backend running ✔
* Frontend running ✔
* MongoDB connected ✔
* API working ✔
* GitHub repo uploaded ✔

---

