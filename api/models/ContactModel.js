const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  name: { type: String, required: true, trim: true, unique: true },
  role: { type: String, required: true },
  email: { type: String },
  tag: {
    type: String,
    required: true,
    enum: ["city", "kinder", "matya", "other"],
  },
  phoneNumber: { type: String },
  officePhone: { type: String },
});

module.exports = mongoose.model("Contact", ContactSchema);
