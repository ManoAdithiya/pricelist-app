const express = require("express");
const pool = require("../config/db");

const router = express.Router();

router.get("/", async (req, res) => {
  const result = await pool.query("SELECT * FROM products");
  res.json(result.rows);
});

router.put("/:id", async (req, res) => {
  try {
    console.log("BODY FROM REACT", req.body);

    const { id } = req.params;

    let { article_no, product, in_price, price, unit, stock, description } =
      req.body;

    in_price = Number(in_price);
    price = Number(price);
    stock = Number(stock);

    const result = await pool.query(
      `UPDATE products
       SET article_no=$1,
           product=$2,
           in_price=$3,
           price=$4,
           unit=$5,
           stock=$6,
           description=$7
       WHERE id=$8
       RETURNING *`,
      [article_no, product, in_price, price, unit, stock, description, id],
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error("PUT ERROR", err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
