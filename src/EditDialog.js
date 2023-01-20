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
import styles from "./styles/EditDialogStyles";
import { Zoom } from "@material-ui/core";

const Transition = React.forwardRef((props, ref) => {
  return <Zoom timeout={2000} ref={ref} {...props} />;
});

function EdidDialog({
  classes,
  open,
  close,
  editContact,
  name,
  id,
  tag,
  roll,
  phoneNumber,
  email,
  officePhone,
}) {
  const [contact, setContact] = useState({
    name: "",
    roll: "",
    officePhone: "",
    phoneNumber: "",
    email: "",
    tag: "",
  });

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/contacts/${id}`
      );
      setContact(response.data);
    }
    getData();
  }, [open]);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleEditForm = async (e) => {
    e.preventDefault();
    editContact(contact, id);
    close();
  };

  return (
    <Dialog TransitionComponent={Transition} open={open} onClose={close}>
      <DialogTitle disableTypography={true} className={classes.editContactHead}>
        עריכת איש קשר
      </DialogTitle>
      <form className={classes.EditContactForm} onSubmit={handleEditForm}>
        <TextField
          fullWidth
          required
          className={classes.editContactInput}
          type="text"
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
          id="phone"
          name="phoneNumber"
          label="מספר טלפון"
          InputLabelProps={{ classes: { root: classes.editContactLabel } }}
          value={contact.phoneNumber}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          className={classes.editContactInput}
          type="text"
          id="officePhone"
          name="officePhone"
          label="טלפון במשרד"
          InputLabelProps={{ classes: { root: classes.editContactLabel } }}
          value={contact.officePhone}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          className={classes.editContactInput}
          type="email"
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
