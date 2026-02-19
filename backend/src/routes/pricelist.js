const express = require("express");
const pool = require("../config/db");

const router = express.Router();

router.get("/", async (req, res) => {
  const result = await pool.query("SELECT * FROM products ORDER BY id ASC");
  res.json(result.rows);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { article_no, product, in_price, price, unit, stock, description } =
    req.body;

  await pool.query(
    `UPDATE products
     SET article_no=$1,
         product=$2,
         in_price=$3,
         price=$4,
         unit=$5,
         stock=$6,
         description=$7
     WHERE id=$8`,
    [article_no, product, in_price, price, unit, stock, description, id],
  );

  res.json({ message: "Updated successfully" });
});

module.exports = router;
