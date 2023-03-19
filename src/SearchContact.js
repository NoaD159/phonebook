import React, { useState, useEffect } from "react";
import UseToggleState from "./hooks/UseToggleState";

import { Autocomplete, TextField } from "@mui/material";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/SearchContactStyles";

function SearchContact({ classes, contacts, selectedContactRef }) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(
      contacts.map((contact) => ({
        value: contact.name,
        label: `${contact.name} - ${contact.roll}`,
        id: contact._id,
      }))
    );
  }, [contacts]);

  const handleSelectedContact = (e, value) => {
    // const contactRef = contacts.find((c) => c._id === value.id).contactRef;

    selectedContactRef.current = document.querySelector(
      `[data-contact-id="${value.id}"]`
    );
    selectedContactRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div>
      <h2 className={classes.searchHead}>חיפוש איש קשר</h2>
      {contacts.length !== 0 && (
        <Autocomplete
          className={classes.autocomplete}
          options={options}
          onChange={handleSelectedContact}
          renderInput={(params) => (
            <TextField
              className={classes.searchContact}
              {...params}
              label="בחר איש קשר"
              InputLabelProps={{
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
