import React from "react";
import { MenuItem, Select, TextField } from "@material-ui/core";
import { useState } from "react";
import UseToggleState from "./hooks/UseToggleState";

import { Snackbar } from "@material-ui/core";
import { Cancel } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/NewContactFormStyles";

function NewContactForm({
  addContact,
  classes,
  snackbarError,
  isSnackbarOpen,
  setSnackbarOpen,
}) {
  const newContactResetForm = {
    name: "",
    roll: "",
    phoneNumber: "",
    officePhone: "",
    email: "",
    tag: "city",
  };
  const [newContact, setNewContact] = useState(newContactResetForm);
  const [isFormOpen, toggleForm] = UseToggleState(false);

  const handleChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    addContact(newContact);

    setNewContact(newContactResetForm);
  };

  return (
    <div className="NewContactForm">
      <h3 className={classes.newContactHead} onClick={toggleForm}>
        הוסף איש קשר חדש
      </h3>
      <Snackbar
        open={isSnackbarOpen}
        className={classes.snackbar}
        message={snackbarError}
        onClose={() => setSnackbarOpen(false)}
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              className={classes.cancelSnackbar}
              onClick={() => setSnackbarOpen(false)}
            >
              <Cancel fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
      {isFormOpen && (
        <form onSubmit={handleFormSubmit} className={classes.NewContactForm}>
          <div>
            <TextField
              fullWidth
              required
              className={classes.newContactInput}
              type="text"
              id="name"
              name="name"
              label="שם"
              InputLabelProps={{ classes: { root: classes.newContactLabel } }}
              value={newContact.name}
              onChange={handleChange}
            ></TextField>

            <TextField
              fullWidth
              required
              className={classes.newContactInput}
              type="text"
              id="roll"
              name="roll"
              label="תפקיד"
              InputLabelProps={{ classes: { root: classes.newContactLabel } }}
              value={newContact.roll}
              onChange={handleChange}
            ></TextField>

            <TextField
              fullWidth
              className={classes.newContactInput}
              inputMode="decimal"
              type="text"
              id="phone"
              name="phoneNumber"
              label="מספר טלפון"
              InputLabelProps={{ classes: { root: classes.newContactLabel } }}
              value={newContact.phoneNumber}
              onChange={handleChange}
            ></TextField>

            <TextField
              fullWidth
              className={classes.newContactInput}
              type="text"
              id="officePhone"
              name="officePhone"
              label="טלפון במשרד"
              InputLabelProps={{ classes: { root: classes.newContactLabel } }}
              value={newContact.officePhone}
              onChange={handleChange}
            ></TextField>

            <TextField
              fullWidth
              className={classes.newContactInput}
              type="email"
              id="email"
              name="email"
              label="כתובת מייל"
              InputLabelProps={{ classes: { root: classes.newContactLabel } }}
              value={newContact.email}
              onChange={handleChange}
            ></TextField>
          </div>

          <Select
            required
            className={classes.newContactInput}
            value={newContact.tag}
            name="tag"
            id="tag"
            labelId="tag-label"
            onChange={handleChange}
          >
            <MenuItem value="city">עירייה ומנהל החינוך</MenuItem>
            <MenuItem value="matya">פיקוח ומתי"א</MenuItem>
            <MenuItem value="kinder">גננות</MenuItem>
            <MenuItem value="other">אחר</MenuItem>
          </Select>
          {/* <Button 
className="submitButton"
onClick={e=>{
e.preventDefault();
addContact(newContact);
setNewContact({
name:"",
roll:"",
phoneNumber:"",
officePhone:"",
email:"",
tag:"city",
})
}}
>הוסף איש קשר</Button> */}
          <button type="submit" className={classes.submitButton}>
            הוסף איש קשר
          </button>
        </form>
      )}
    </div>
  );
}

export default withStyles(styles)(NewContactForm);
