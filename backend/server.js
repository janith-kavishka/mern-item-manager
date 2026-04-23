const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dns = require("dns");

// Force Node.js to use Google DNS to bypass university/lab network blocks
dns.setServers(['8.8.8.8', '8.8.4.4']);

const app = express();
app.use(cors());
app.use(express.json());

// 🔗 MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// 🧱 Model
const ItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String
});
const Item = mongoose.model("Item", ItemSchema);

// 📥 GET
app.get("/api/items", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// 📤 POST
app.post("/api/items", async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.json(item);
});

// 🚀 Start server
app.listen(5000, () => console.log("Server running on port 5000"));