// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config({ path: "./config.env" });
// }

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const contactRoutes = require("./routes/contactRoutes");
require("dotenv").config({ path: "./config.env" });

const app = express();
const port = process.env.PORT || 8080;
const uri = process.env.ATLAS_URI;

app.use(cors());
app.use(express.json());

mongoose.set("strictQuery", true);
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use(express.urlencoded({ extended: true }));
app.use("/contacts", contactRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
