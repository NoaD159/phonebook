// if (process.env.REACT_APP_NODE_ENV !== "production") {
//   require("dotenv").config({ path: "./.env" });
// }

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const contactRoutes = require("./routes/contactRoutes");

require("dotenv").config({ path: "./.env" });

const app = express();
const port = process.env.REACT_APP_PORT || 8080;
const uri = process.env.MONGODB_URI;
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://snap.licdn.com"
  );
  next();
});
app.use(cors({ origin: "*" }));
app.use(express.json());

mongoose.set("strictQuery", true);
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../build")));

app.use("/contacts", contactRoutes);

app.get("/", (req, res) => {
  res.json("success!");
});

app.get("/*", (req, res) => {
  res.json("success!");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
module.exports = app;
