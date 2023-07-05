import React, { useState, useEffect } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/SearchContactStyles";

function SearchContact({ classes, contacts, handleSelectedContact }) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(
      contacts.map((contact) => ({
        value: contact.name,
        label: `${contact.name} - ${contact.role}`,
        id: contact._id,
      }))
    );
  }, [contacts]);

  const handleAutocompleteChange = (event, value) => {
    if (value && value.id) {
      handleSelectedContact(value.id);
    }
  };

  return (
    <div className={classes.SearchContact}>
      <h2 className={classes.searchHead}>חיפוש איש קשר</h2>
      {contacts.length !== 0 && (
        <Autocomplete
          className={classes.autocomplete}
          options={options}
          onChange={handleAutocompleteChange}
          renderInput={(params) => (
            <TextField
              className={classes.searchTextField}
              {...params}
              label="בחר איש קשר"
              InputLabelProps={{
                shrink: true,
                classes: { root: classes.searchContactLabel },
              }}
              variant="outlined"
            />
          )}
        />
      )}
    </div>
  );
}

export default withStyles(styles)(SearchContact);
