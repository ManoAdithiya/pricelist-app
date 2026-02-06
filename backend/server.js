const express = require("express");
const cors = require("cors");
require("dotenv").config();
const pool = require("./src/config/db");

const authRoutes = require("./src/routes/auth");
const pricelistRoutes = require("./src/routes/pricelist");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/pricelist", pricelistRoutes);

pool
  .query("SELECT 1")
  .then(() => console.log("PostgreSQL connected"))
  .catch((err) => console.error("DB error:", err));

app.listen(process.env.PORT, () => {
  console.log("Server running on port", process.env.PORT);
});
