const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    items: [],
    total: 0
  });
});

router.post("/add", (req, res) => {
  res.json({ message: "Product added to cart" });
});

router.put("/update", (req, res) => {
  res.json({ message: "Cart updated successfully" });
});

router.delete("/remove", (req, res) => {
  res.json({ message: "Product removed from cart" });
});

module.exports = router;