const mongoose = require("mongoose");
const Contact = require("../models/ContactModel");
const allContact = require("./initialContact");
require("dotenv").config({ path: "../config.env" });

const uri = process.env.ATLAS_URI;
mongoose.set("strictQuery", true);
mongoose.connect(uri, {
  useNewUrlParser: true,
  // useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const seedDB = async () => {
  await Contact.deleteMany({});

  for (let i = 0; i < allContact.length; i++) {
    const newContact = new Contact({
      name: allContact[i].name,
      roll: allContact[i].roll,
      email: allContact[i].email,
      tag: allContact[i].tag,
      phoneNumber: allContact[i].phoneNumber,
      officePhone: allContact[i].officePhone,
    });
    await newContact.save();
    console.log(newContact);
  }
  console.log("Successfuly Created Contacts");
};

seedDB().then(() => {
  mongoose.connection.close();
});
