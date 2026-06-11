const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Laptop",
      price: 50000
    },
    {
      id: 2,
      name: "Headphones",
      price: 2000
    }
  ]);
});

router.post("/", (req, res) => {
  res.json({ message: "Product added successfully" });
});

module.exports = router;