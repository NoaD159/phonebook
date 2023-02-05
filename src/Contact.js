import { useState, useRef, forwardRef } from "react";
import UseToggleState from "./hooks/UseToggleState";
import {
  ListItemSecondaryAction,
  ListItem,
  ListItemText,
  IconButton,
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { ArrowDropDownCircleOutlined } from "@mui/icons-material";
import { Delete, Edit } from "@mui/icons-material";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/ContactStyles";
import DeleteDialog from "./DeleteDialog";
import EdidDialog from "./EditDialog";

const Contact = forwardRef(function (props, ref) {
  const {
    classes,
    name,
    roll,
    phoneNumber,
    email,
    tag,
    officePhone,
    color,
    removeContact,
    editContact,
    _id,
  } = props;
  const [isDeleteDialogOpen, setDeleteDialog] = useState(false);
  const [isEditDialogOpen, setEditDialog] = useState(false);
  const [ShowEmail, setShowEmail] = UseToggleState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const contactRef = useRef();

  function handleClick(e) {
    setShowEmail();
    setAnchorEl(e.currentTarget);
  }
  const handleDelete = (e) => {
    e.stopPropagation();
    setDeleteDialog(true);
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    setEditDialog(true);
  };

  const closeDeleteDialog = () => {
    setDeleteDialog(false);
  };

  const closeEditDialog = () => {
    setEditDialog(false);
  };

  return (
    <>
      <ListItem
        ref={contactRef.current}
        data-contact-id={_id}
        style={{ backgroundColor: `#${color}` }}
        className={classes.Contact}
      >
        <ListItemText
          primaryTypographyProps={{ classes: { root: classes.contactNames } }}
          primary={name}
          secondary={roll}
        ></ListItemText>
        <ListItemText
          primaryTypographyProps={{ classes: { root: classes.contactPhones } }}
          primary={
            <a href={`tel:${phoneNumber}`} className={classes.clickableLink}>
              {phoneNumber}
            </a>
          }
          secondary={
            <a href={`tel:${officePhone}`} className={classes.clickableLink}>
              {officePhone}
            </a>
          }
        ></ListItemText>
        {/* 
        {ShowEmail ? (
          <>
            <ListItemText
              primary={
                <a href={`mailto:${email}`} className={classes.clickableLink}>
                  {email}
                </a>
              }
              primaryTypographyProps={{
                classes: { root: classes.contactEmail },
              }}
            ></ListItemText>
          </>
        ) : (
          <Button
            style={{ direction: "ltr" }}
            // className={classes.ShowEmailButton}
            onClick={setShowEmail}
          >
            {email.length > 3 ? "הצג מייל" : "אין מייל להציג"}
          </Button>
        )} */}
        <Button
          id="demo-positioned-button"
          aria-controls={ShowEmail ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={ShowEmail ? "true" : undefined}
          onClick={handleClick}
        >
          {ShowEmail ? "הסתר אימייל" : "הצג אימייל"}
          <ArrowDropDownCircleOutlined />
        </Button>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={ShowEmail}
          onClose={setShowEmail}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          getContentAnchorEl={null}
        >
          <MenuItem>
            {" "}
            <a href={`mailto:${email}`} className={classes.clickableLink}>
              {email}
            </a>
          </MenuItem>
        </Menu>

        <ListItemSecondaryAction className={classes.icons}>
          <IconButton className={classes.icon} onClick={handleDelete}>
            <Delete />
          </IconButton>
          <IconButton className={classes.icon} onClick={handleEdit}>
            <Edit aria-label="Edit" />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>

      <DeleteDialog
        open={isDeleteDialogOpen}
        close={closeDeleteDialog}
        removeContact={removeContact}
        deleteId={_id}
      />
      <EdidDialog
        open={isEditDialogOpen}
        close={closeEditDialog}
        editContact={editContact}
        id={_id}
        name={name}
        roll={roll}
        tag={tag}
        phoneNumber={phoneNumber}
        email={email}
        officePhone={officePhone}
      />
    </>
  );
});

export default withStyles(styles)(Contact);
