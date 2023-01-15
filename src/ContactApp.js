import { useState, useEffect } from "react";

import NewContactForm from "./NewContactForm";
import ContactTable from "./ContactTable";

import { withStyles } from "@material-ui/styles";
import axios from "axios";

const styles = {
  "@global": {
    ".fade-exit": {
      opacity: 1,
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 500ms ease-out",
    },
  },
};

function ContactApp() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(`http://localhost:8080/contacts`);
      setContacts(response.data);
    }
    getData();
  }, [contacts]);

  // const addContact = (newContact) => {
  //   setContacts([...contacts, { ...newContact }]);
  // };

  const removeContact = async (id) => {
    const updatedContacts = contacts.filter((contact) => contact._id !== id);
    await axios.delete(`http://localhost:8080/contacts/${id}`);
    setContacts(updatedContacts);
  };

  const editContact = (contact) => {
    const updatedContacts = contacts.map((c) => {
      if (contact.id === c._id) {
        return contact;
      } else {
        return c;
      }
    });

    setContacts(updatedContacts);
  };

  return (
    <div className="ContactApp">
      <h1>אנשי קשר- חולון</h1>
      <NewContactForm />
      <ContactTable
        contacts={contacts}
        removeContact={removeContact}
        editContact={editContact}
      />
      {/* <DeleteDialog open={isDialogOpen} close={toggleDeleteDialog}/> */}
    </div>
  );
}

export default withStyles(styles)(ContactApp);
