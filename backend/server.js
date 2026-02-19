const express = require("express");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("./src/routes/auth");
const pricelistRoutes = require("./src/routes/pricelist");
const app = express();
const pool = require("./src/config/db");

// app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/pricelist", pricelistRoutes);

app.use(
  cors({
    origin: ["http://localhost:5173", "https://pricelist-app-mu.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.listen(process.env.PORT, () => {
  console.log("Server running on port", process.env.PORT);
});
app.get("/", (req, res) => {
  res.send("API is running");
});
