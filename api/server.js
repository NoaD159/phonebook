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

// pp.use((req, res, next) => {
//   res.setHeader(
//     "Access-Control-Allow-Origin",
//     "https://https://phonebook-holon.vercel.app"
//   );
//   res.setHeader("Access-Control-Allow-Headers", "Content-type");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   next();
// });

// app.use(cors());
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
  console.log("Home Route");
});

app.get("/*", (req, res) => {
  console.log("This page does not exist");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
module.exports = app;
