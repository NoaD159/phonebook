import React from "react";
import { MenuItem, Select, TextField } from "@material-ui/core";
import { useState, useEffect } from "react";
import UseToggleState from "../hooks/UseToggleState";
import { Snackbar } from "@material-ui/core";
import { Cancel } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/NewContactFormStyles";

function NewContactForm({
  addContact,
  classes,
  snackbarError,
  isSnackbarOpen,
  setSnackbarOpen,
}) {
  const newContactResetForm = {
    name: "",
    role: "",
    phoneNumber: "",
    officePhone: "",
    email: "",
    tag: "city",
  };
  const [newContact, setNewContact] = useState(newContactResetForm);
  const [isFormOpen, toggleForm] = UseToggleState(false);
  const [nameError, setNameError] = useState(false);
  const [roleError, setRoleError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [officePhoneError, setOfficePhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const israeliPhoneNumberRegex =
    /^(?:\+972|0)(5[^7]|[2-4]|[8-9]|7[0-9])[0-9]{7}$/;

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

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

  const handleChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setIsFormSubmitted(true);

    validateRequiredInput(newContact.name, setNameError);
    validateRequiredInput(newContact.role, setRoleError);
    validateRegexInput(
      newContact.phoneNumber,
      israeliPhoneNumberRegex,
      setPhoneNumberError
    );
    validateRegexInput(
      newContact.officePhone,
      israeliPhoneNumberRegex,
      setOfficePhoneError
    );
    validateRegexInput(newContact.email, emailRegex, setEmailError);
  };

  useEffect(() => {
    if (
      !nameError &&
      !roleError &&
      !emailError &&
      !phoneNumberError &&
      !officePhoneError &&
      isFormSubmitted
    ) {
      addContact(newContact);
      setNewContact(newContactResetForm);
      setIsFormSubmitted(false);
    }
  }, [
    nameError,
    roleError,
    emailError,
    phoneNumberError,
    officePhoneError,
    isFormSubmitted,
  ]);

  return (
    <div className="NewContactForm">
      <h3 className={classes.newContactHead} onClick={toggleForm}>
        הוסף איש קשר חדש
      </h3>
      <Snackbar
        open={isSnackbarOpen}
        className={classes.snackbar}
        message={snackbarError}
        onClose={() => setSnackbarOpen()}
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              className={classes.cancelSnackbar}
              onClick={() => setSnackbarOpen()}
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
              className={classes.newContactInput}
              type="text"
              inputProps={{ maxLength: 30 }}
              id="name"
              name="name"
              label="שם *"
              InputLabelProps={{ classes: { root: classes.newContactLabel } }}
              value={newContact.name}
              onChange={handleChange}
              error={nameError}
              helperText={nameError && "שדה זה לא יכול להשאר ריק"}
            ></TextField>

            <TextField
              fullWidth
              className={classes.newContactInput}
              type="text"
              inputProps={{ maxLength: 30 }}
              id="role"
              name="role"
              label="תפקיד *"
              InputLabelProps={{ classes: { root: classes.newContactLabel } }}
              value={newContact.role}
              onChange={handleChange}
              error={roleError}
              helperText={roleError && "שדה זה לא יכול להשאר ריק"}
            ></TextField>

            <TextField
              fullWidth
              className={classes.newContactInput}
              inputMode="decimal"
              type="text"
              inputProps={{ maxLength: 11 }}
              id="phone"
              name="phoneNumber"
              label="מספר טלפון"
              InputLabelProps={{ classes: { root: classes.newContactLabel } }}
              value={newContact.phoneNumber}
              onChange={handleChange}
              error={phoneNumberError}
              helperText={phoneNumberError && "מספר טלפון לא תקין"}
            ></TextField>

            <TextField
              fullWidth
              className={classes.newContactInput}
              type="text"
              inputProps={{ maxLength: 11 }}
              id="officePhone"
              name="officePhone"
              label="טלפון במשרד"
              InputLabelProps={{ classes: { root: classes.newContactLabel } }}
              value={newContact.officePhone}
              onChange={handleChange}
              error={officePhoneError}
              helperText={officePhoneError && "מספר טלפון לא תקין"}
            ></TextField>

            <TextField
              fullWidth
              className={classes.newContactInput}
              type="text"
              id="email"
              name="email"
              inputProps={{ maxLength: 30 }}
              label="כתובת מייל"
              InputLabelProps={{ classes: { root: classes.newContactLabel } }}
              value={newContact.email}
              onChange={handleChange}
              error={emailError}
              helperText={emailError && "כתובת המייל אינה תקינה"}
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

          <button type="submit" className={classes.submitButton}>
            הוסף איש קשר
          </button>
        </form>
      )}
    </div>
  );
}

export default withStyles(styles)(NewContactForm);
