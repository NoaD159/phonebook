import React, { useState, useEffect } from "react";
import UseToggleState from "./hooks/UseToggleState";

import { Autocomplete, TextField } from "@mui/material";
import { withStyles } from "@material-ui/styles";

const styles = {
  searchHead: {
    borderBottom: "1px solid white",
    color: "#ac89c1",
    fontSize: "20px",
    fontHeight: "600",
    lineHeight: "24px",
    padding: "10px",
    textAlign: "center",
    background: "#e7d0f5",
    cursor: "pointer",
    "&:hover": {
      background: "rgba(177, 149, 193, 0.6)",
      boxShadow: "1px",
    },
  },
  autocomplete: {
    borderRadius: "15px",
    margin: "1rem",
    width: "90%",
  },
  searchContact: {
    borderRadius: "15px",
  },
  searchContactLabel: {
    direction: "rtl",
    right: "-15%",
  },
};

function SearchContact({ classes, contacts, selectedContactRef }) {
  const [options, setOptions] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = UseToggleState(false);

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
    // contactRef.current.scrollIntoView({ behavior: "smooth" });

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
      <h2 className={classes.searchHead} onClick={setIsSearchOpen}>
        חיפוש איש קשר
      </h2>
      {contacts.length !== 0 && isSearchOpen && (
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
