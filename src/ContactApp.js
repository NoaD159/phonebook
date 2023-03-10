import { useState, useEffect, useRef } from "react";
import axios from "axios";
import NewContactForm from "./NewContactForm";
import ContactTable from "./ContactTable";
import SearchContact from "./SearchContact";
import LoadingSpinner from "./LoadingSpinner";
import { Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

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
  const [isLoading, setIsLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarError, setSnackbarError] = useState("");

  const selectedContactRef = useRef(null);

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/contacts`
      );
      setIsLoading(false);
      setContacts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const addContact = async (newContact) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/contacts`,
        newContact
      );
    } catch (err) {
      if (err.response.data.code === 11000) {
        setSnackbarError("שם זה כבר קיים במערכת");
        setSnackbarOpen(true);
      } else {
        setSnackbarError("משהו השתבש");
        setSnackbarOpen(true);
      }
      console.log("ERR", err.response.data);
    }

    getData();
  };

  // const addContact = async (newContact) => {
  //   await axios.post(
  //     `${process.env.REACT_APP_BASE_URL}/api/contacts`,
  //     newContact
  //   );
  //   getData();
  // };

  const removeContact = async (id) => {
    // const updatedContacts = contacts.filter((contact) => contact._id !== id);
    await axios.delete(`${process.env.REACT_APP_BASE_URL}/api/contacts/${id}`);
    getData();
  };

  const editContact = async (contact, id) => {
    await axios.put(
      `${process.env.REACT_APP_BASE_URL}/api/contacts/${id}`,
      contact
    );
    getData();
  };

  return (
    <div className="ContactApp">
      <h1>אנשי קשר- חולון</h1>
      {isLoading && <LoadingSpinner />}

      <img
        style={{ width: "50%" }}
        src="https://blog.smoove.io/wp-content/uploads/2017/10/8people.jpg"
      />

      <NewContactForm
        addContact={addContact}
        isSnackbarOpen={snackbarOpen}
        setSnackbarOpen={setSnackbarOpen}
        snackbarError={snackbarError}
      />
      <SearchContact
        selectedContactRef={selectedContactRef}
        contacts={contacts}
      />
      <ContactTable
        contacts={contacts}
        removeContact={removeContact}
        editContact={editContact}
        selectedContactRef={selectedContactRef}
      />

      {/* <DeleteDialog open={isDialogOpen} close={toggleDeleteDialog}/> */}
    </div>
  );
}

export default withStyles(styles)(ContactApp);
