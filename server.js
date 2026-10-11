const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/api/health", (req, res) => {
  res.json({ status: "StayScore is running" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`StayScore running on port ${PORT}`);
});
