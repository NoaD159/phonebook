import { useState } from "react";
import { Select, MenuItem, InputLabel } from "@material-ui/core";
import ContactList from "./ContactList";
import { withStyles } from "@material-ui/styles";

const styles = {
  selectContainer: {
    margin: "1rem 1rem",
    marginBottom: "2rem",
  },
  selectTag: {
    fontFamily: "'Varela Round', sans-serif",
  },
};

function ContactTable({
  classes,
  contacts,
  removeContact,
  editContact,
  selectedContactRef,
}) {
  const [filterByTag, setFilterByTag] = useState("all");

  const matyaContactList = [];
  const cityContactList = [];
  const kinderContactList = [];
  const otherList = [];

  const mapContacts = () => {
    if (Array.isArray(contacts)) {
      contacts.map((contact) => {
        if (contact.tag === "matya") {
          return matyaContactList.push(contact);
        } else if (contact.tag === "city") {
          return cityContactList.push(contact);
        } else if (contact.tag === "kinder") {
          return kinderContactList.push(contact);
        } else {
          return otherList.push(contact);
        }
      });
    }
  };

  mapContacts();
  const tagInfo = [
    {
      tagName: "matya",
      color: "c5626233",
      head: 'פיקוח ומתי"א',
      contacts: matyaContactList,
    },
    {
      tagName: "city",
      color: "a5e19a33",
      head: "עירייה",
      contacts: cityContactList,
    },
    {
      tagName: "kinder",
      color: "dd80b333",
      head: "גני הילדים",
      contacts: kinderContactList,
    },
    { tagName: "other", color: "ccdd8033", head: "אחר", contacts: otherList },
  ];

  const noFilterList = tagInfo.map((tag) => (
    <div key={tag.tagName}>
      <h3 style={{ backgroundColor: `#${tag.color}` }}>{tag.head}</h3>
      <ContactList
        removeContact={removeContact}
        editContact={editContact}
        color={tag.color}
        contacts={tag.contacts}
        key={tag.tagName}
        selectedContactRef={selectedContactRef}
      />
    </div>
  ));

  const handleTagChange = (e) => {
    setFilterByTag(e.target.value);
  };

  return (
    <div className="ContactTable">
      <h2>טלפונים שימושיים</h2>
      <div className={classes.selectContainer}>
        <InputLabel id="filter-tag-label">סינון לפי תוית</InputLabel>
        <Select
          className={classes.selectTag}
          value={filterByTag}
          labelId="filter-tag-label"
          onChange={handleTagChange}
        >
          <MenuItem className={classes.selectTag} value="all">
            הכל
          </MenuItem>
          <MenuItem className={classes.selectTag} value="city">
            עירייה ומנהל החינוך
          </MenuItem>
          <MenuItem className={classes.selectTag} value="matya">
            פיקוח ומתי"א
          </MenuItem>
          <MenuItem className={classes.selectTag} value="kinder">
            גננות
          </MenuItem>
          <MenuItem className={classes.selectTag} value="other">
            אחר
          </MenuItem>
        </Select>
      </div>

      {filterByTag === "all"
        ? noFilterList
        : tagInfo.map((tag) => {
            if (tag.tagName === filterByTag) {
              return (
                <ContactList
                  removeContact={removeContact}
                  editContact={editContact}
                  color={tag.color}
                  contacts={tag.contacts}
                  key={tag.tagName}
                  selectedContactRef={selectedContactRef}
                />
              );
            }
          })}
    </div>
  );
}

export default withStyles(styles)(ContactTable);
