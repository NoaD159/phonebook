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
    roll: "",
    officePhone: "",
    phoneNumber: "",
    email: "",
    tag: "",
  });
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [officePhoneError, setOfficePhoneError] = useState(false);

  const israeliPhoneNumberRegex =
    /^(?:\+972|0)(5[^7]|[2-4]|[8-9]|7[0-9])[0-9]{7}$/;

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/contacts/${id}`
      );
      setContact(response.data);
    }
    getData();
  }, [open]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (contact.phoneNumber) {
        if (!israeliPhoneNumberRegex.test(contact.phoneNumber)) {
          setPhoneNumberError(true);
        } else {
          setPhoneNumberError(false);
        }
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [contact.phoneNumber]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (contact.officePhone) {
        if (!israeliPhoneNumberRegex.test(contact.officePhone)) {
          setOfficePhoneError(true);
        } else {
          setOfficePhoneError(false);
        }
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [contact.officePhone]);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleEditForm = async (e) => {
    e.preventDefault();
    editContact(contact, id);
    close();
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
          required
          className={classes.editContactInput}
          type="text"
          inputProps={{ maxLength: 20 }}
          id="name"
          name="name"
          label="שם"
          InputLabelProps={{ classes: { root: classes.editContactLabel } }}
          value={contact.name}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          required
          className={classes.editContactInput}
          type="text"
          inputProps={{ maxLength: 20 }}
          id="roll"
          name="roll"
          label="תפקיד"
          InputLabelProps={{ classes: { root: classes.editContactLabel } }}
          value={contact.roll}
          onChange={handleChange}
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
          type="email"
          inputProps={{ maxLength: 25 }}
          id="email"
          name="email"
          label="כתובת מייל"
          InputLabelProps={{ classes: { root: classes.editContactLabel } }}
          value={contact.email}
          onChange={handleChange}
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
