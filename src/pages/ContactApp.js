import { useState, useEffect } from "react";
import useToggle from "../hooks/UseToggleState";
import axios from "axios";
import NewContactForm from "../components/NewContactForm";
import ContactTable from "../components/ContactTable";
import SearchContact from "../components/SearchContact";
import LoadingSpinner from "../components/LoadingSpinner";
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
  const [snackbarOpen, setSnackbarOpen] = useToggle(false);
  const [snackbarError, setSnackbarError] = useState("");
  const [selectedContactId, setSelectedContactId] = useState(null);

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

  // const handleSelectedContact = (contactId) => {
  //   setSelectedContactId(contactId);
  // };

  useEffect(() => {
    const selectedContact = contacts.find(
      (contact) => contact._id === selectedContactId
    );
    if (selectedContact) {
      // Scroll to the selected contact using the window.scrollTo method
      const elementToScroll = document.getElementById(selectedContact._id);
      if (elementToScroll) {
        elementToScroll.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [selectedContactId, contacts]);

  const addContact = async (newContact) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/contacts`,
        newContact
      );
    } catch (err) {
      if (err.response.data.code === 11000) {
        setSnackbarError("שם זה כבר קיים במערכת");
        setSnackbarOpen();
      } else {
        setSnackbarError("משהו השתבש במילוי הטופס");
        setSnackbarOpen();
      }
      console.log("ERR", err.response.data);
    }

    getData();
  };

  const removeContact = async (id) => {
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
        alt="contacts-img"
        style={{ maxWidth: "350px" }}
        src="https://blog.smoove.io/wp-content/uploads/2017/10/8people.jpg"
      />

      <NewContactForm
        addContact={addContact}
        isSnackbarOpen={snackbarOpen}
        setSnackbarOpen={setSnackbarOpen}
        snackbarError={snackbarError}
      />
      <SearchContact
        contacts={contacts}
        setSelectedContactId={setSelectedContactId}
      />
      <ContactTable
        contacts={contacts}
        removeContact={removeContact}
        editContact={editContact}
        selectedContactId={selectedContactId}
      />
    </div>
  );
}

export default withStyles(styles)(ContactApp);
