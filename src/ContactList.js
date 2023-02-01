import { Box, List } from "@material-ui/core";
import Contact from "./Contact";

function ContactList({
  contacts,
  color,
  removeContact,
  editContact,
  selectedContactRef,
}) {
  return (
    <div className="ContactList">
      <Box>
        <List>
          {contacts.map((c) => (
            <Contact
              removeContact={removeContact}
              editContact={editContact}
              color={color}
              key={c._id}
              ref={selectedContactRef}
              {...c}
            />
          ))}
        </List>
      </Box>
    </div>
  );
}

export default ContactList;
