const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

let products = [
  {
    id: 1,
    articleNo: "1234567890",
    name: "Test Product",
    inPrice: 900,
    price: 1500,
    unit: "pcs",
    stock: 20,
    description: "This is a sample product",
  },
];

router.get("/", authMiddleware, (req, res) => {
  res.json(products);
});

module.exports = router;
