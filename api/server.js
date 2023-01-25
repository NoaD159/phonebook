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

app.use(cors());
app.use(express.json());

mongoose.set("strictQuery", true);
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../build")));

app.use("/api/contacts", contactRoutes);

// app.get("*", (req, res) => {
//   console.log("This page does not exist");
//   res.sendFile(path.join(__dirname, "../build/index.html"), function (err) {
//     if (err) {
//       res.status(500).send(err);
//     }
//   });
// });

// app.use((req, res) => {
//   res.status(404).sendFile(path.join(__dirname, "../build/404.html"));
// });

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
module.exports = app;
