require("dotenv").config();
const PORT = process.env.PORT || 5000;

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require('morgan')
const notesRoutes = require("./routes/notes");

const app = express();

app.use(morgan('dev'))
app.use(cors({ origin: "*" }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/notes", notesRoutes);

app.get("/", (req, res) => {
  res.send("Home Api Notes Application");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
