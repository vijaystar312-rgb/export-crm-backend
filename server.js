const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

/* Health check */
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

/* Root */
app.get("/", (req, res) => {
  res.send("Export CRM Backend Running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
