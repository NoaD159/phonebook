const express = require("express");
const router = new express.Router();
const Contact = require("../models/ContactModel");

router
  .route("/")
  .get(async (req, res) => {
    const contacts = await Contact.find({});

    res.json(contacts);
  })
  .post(async (req, res) => {
    // const newContact = new Contact(req.body);
    const { name, tag, roll, email, phoneNumber, officePhone } = req.body;
    const newContact = new Contact({
      name,
      roll,
      tag,
      email,
      phoneNumber,
      officePhone,
    });
    await newContact.save();
  });

router
  .route("/:id")
  .get(async (req, res) => {
    const { id } = req.params;
    const contact = await Contact.findById(id);
    res.json(contact);
  })
  .delete(async (req, res) => {
    const { id } = req.params;
    await Contact.findByIdAndDelete(id);
  })
  .put(async (req, res) => {
    const { id } = req.params;
    // const contact = req.body;
    // const updateContact = Contact.findByIdAndUpdate(id, req.body.contact);
    const { name, tag, roll, email, phoneNumber, officePhone } = req.body;
    const contact = await Contact.findById(id);
    contact.name = name;
    contact.roll = roll;
    contact.tag = tag;
    contact.email = email;
    contact.phoneNumber = phoneNumber;
    contact.officePhone = officePhone;

    await contact.save();
  });

module.exports = router;
