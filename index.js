const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/database");

const app = express();

connectDB();

app.get("/", (req, res) => {
  res.json({ message: "Hello world from backend" });
});

app.use(bodyParser.json());

const port = process.env.PORT;
app.listen(port, () => console.log(`Server is running on port ${port}`));
