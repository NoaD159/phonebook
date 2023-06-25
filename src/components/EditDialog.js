import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import {
  Dialog,
  DialogTitle,
  TextField,
  Select,
  MenuItem,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/EditDialogStyles";
import { Zoom } from "@material-ui/core";

const Transition = React.forwardRef((props, ref) => {
  return <Zoom timeout={2000} ref={ref} {...props} />;
});

function EdidDialog({ classes, open, close, editContact, id }) {
  const [contact, setContact] = useState({
    name: "",
    role: "",
    officePhone: "",
    phoneNumber: "",
    email: "",
    tag: "",
  });

  const [nameError, setNameError] = useState(false);
  const [roleError, setRoleError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [officePhoneError, setOfficePhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const israeliPhoneNumberRegex =
    /^(?:\+972|0)(5[^7]|[2-4]|[8-9]|7[0-9])[0-9]{7}$/;

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/contacts/${id}`
      );
      setContact(response.data);
    }
    getData();
  }, [open, id]);

  const validateRequiredInput = (field, setError) => {
    if (!field || field.trim() === "") {
      setError(true);
    } else {
      setError(false);
    }
  };

  const validateRegexInput = (field, regex, setError) => {
    if (field && field.trim() !== "") {
      const trimmedField = field.trim();
      if (!regex.test(trimmedField)) {
        setError(true);
      } else {
        setError(false);
      }
    } else {
      setError(false);
    }
  };

  useEffect(() => {
    return validateRequiredInput(contact.name, setNameError);
  }, [contact.name]);

  useEffect(() => {
    return validateRequiredInput(contact.role, setRoleError);
  }, [contact.role]);

  useEffect(() => {
    return validateRegexInput(
      contact.phoneNumber,
      israeliPhoneNumberRegex,
      setPhoneNumberError
    );
  }, [contact.phoneNumber]);

  useEffect(() => {
    return validateRegexInput(
      contact.officePhone,
      israeliPhoneNumberRegex,
      setOfficePhoneError
    );
  }, [contact.officePhone]);

  useEffect(() => {
    return validateRegexInput(contact.email, emailRegex, setEmailError);
  }, [contact.email]);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleEditForm = async (e) => {
    e.preventDefault();

    if (
      !nameError &&
      !roleError &&
      !emailError &&
      !phoneNumberError &&
      !officePhoneError
    ) {
      editContact(contact, id);
      close();
    }
  };

  return (
    <Dialog
      className={classes.editDialog}
      TransitionComponent={Transition}
      open={open}
      onClose={close}
    >
      <DialogTitle disableTypography={true} className={classes.editContactHead}>
        עריכת איש קשר
      </DialogTitle>
      <form className={classes.EditContactForm} onSubmit={handleEditForm}>
        <TextField
          fullWidth
          className={classes.editContactInput}
          type="text"
          inputProps={{ maxLength: 20 }}
          id="name"
          name="name"
          label="שם"
          InputLabelProps={{ classes: { root: classes.editContactLabel } }}
          value={contact.name}
          onChange={handleChange}
          error={nameError}
          helperText={nameError && "שדה זה לא יכול להשאר ריק"}
        />
        <TextField
          fullWidth
          className={classes.editContactInput}
          type="text"
          inputProps={{ maxLength: 20 }}
          id="role"
          name="role"
          label="תפקיד"
          InputLabelProps={{ classes: { root: classes.editContactLabel } }}
          value={contact.role}
          onChange={handleChange}
          error={roleError}
          helperText={roleError && "שדה זה לא יכול להשאר ריק"}
        />
        <TextField
          fullWidth
          className={classes.editContactInput}
          type="text"
          inputProps={{ maxLength: 15 }}
          id="phone"
          name="phoneNumber"
          label="מספר טלפון"
          InputLabelProps={{ classes: { root: classes.editContactLabel } }}
          value={contact.phoneNumber}
          onChange={handleChange}
          error={phoneNumberError}
          helperText={phoneNumberError && "מספר טלפון לא תקין"}
        />

        <TextField
          fullWidth
          className={classes.editContactInput}
          type="text"
          inputProps={{ maxLength: 15 }}
          id="officePhone"
          name="officePhone"
          label="טלפון במשרד"
          InputLabelProps={{ classes: { root: classes.editContactLabel } }}
          value={contact.officePhone}
          onChange={handleChange}
          error={officePhoneError}
          helperText={officePhoneError && "מספר טלפון לא תקין"}
        />

        <TextField
          fullWidth
          className={classes.editContactInput}
          type="text"
          inputProps={{ maxLength: 25 }}
          id="email"
          name="email"
          label="כתובת מייל"
          InputLabelProps={{ classes: { root: classes.editContactLabel } }}
          value={contact.email}
          onChange={handleChange}
          error={emailError}
          helperText={emailError && "כתובת המייל אינה תקינה"}
        />
        <Select
          required
          className={classes.editContactInput}
          value={contact.tag}
          name="tag"
          id="tag"
          // labelId="tag-label"
          onChange={handleChange}
        >
          <MenuItem value="city">עירייה ומנהל החינוך</MenuItem>
          <MenuItem value="matya">פיקוח ומתי"א</MenuItem>
          <MenuItem value="kinder">גננות</MenuItem>
          <MenuItem value="other">אחר</MenuItem>
        </Select>
        <button type="submit" className={classes.submitButton}>
          אישור
        </button>
      </form>
    </Dialog>
  );
}
export default withStyles(styles)(EdidDialog);
