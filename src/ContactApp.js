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
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/contacts`,
          {
            method: "GET",
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",

              mode: "no-cors",
            },
          }
          // const response = await fetch(
          //   `${process.env.REACT_APP_BASE_URL}/contacts`,
          //   {
          //     method: "GET",
          //     headers: {
          //       "Content-Type": "application/json",
          //     },
          //   }
        );
        setContacts(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, []);

  // const addContact = (newContact) => {
  //   setContacts([...contacts, { ...newContact }]);
  // };

  const removeContact = async (id) => {
    const updatedContacts = contacts.filter((contact) => contact._id !== id);
    await axios.delete(`${process.env.REACT_APP_BASE_URL}/contacts/${id}`, {
      method: "DELETE",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",

        mode: "no-cors",
      },
    });

    // await fetch(`${process.env.REACT_APP_BASE_URL}/contacts/${id}`, {
    //   method: "DELETE",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
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
