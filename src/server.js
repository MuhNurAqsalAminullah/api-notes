require("dotenv").config();
const PORT = process.env.PORT || 5000;

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const notesRoutes = require("./routes/notes");

const app = express();

app.use(cors({ origin: "*" }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/notes", notesRoutes);

app.get("/", (req, res) => {
  res.send("Connetting Home Api Notes App");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
