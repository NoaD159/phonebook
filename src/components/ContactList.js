import { Box, List } from "@material-ui/core";
import Contact from "./Contact";

function ContactList({ contacts, color, removeContact, editContact }) {
  return (
    <div className="ContactList">
      <Box>
        <List>
          {contacts.map((contact) => (
            <Contact
              removeContact={removeContact}
              editContact={editContact}
              color={color}
              key={contact._id}
              {...contact}
            />
          ))}
        </List>
      </Box>
    </div>
  );
}

export default ContactList;
