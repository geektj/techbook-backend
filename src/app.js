const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/database");
const routes = require('./routes/index')

const app = express();

app.use(cors())

connectDB();

app.get("/", (req, res) => {
  res.json({ message: "Hello world from backend" });
});

app.use(bodyParser.json());
app.use('/', routes);

const port = process.env.PORT;
app.listen(port, () => console.log(`Server is running on port ${port}`));


