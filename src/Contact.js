import { useState } from "react";
import { ListItemSecondaryAction,ListItem, ListItemText,IconButton  } from "@material-ui/core"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { withStyles } from "@material-ui/styles";
import styles from './styles/ContactStyles'
import DeleteDialog from "./DeleteDialog";
import EdidDialog from "./EditDialog";


function Contact({classes, name, roll, phoneNumber, email, tag, officePhone, color, removeContact, editContact, id},props){
 
    const [isDeleteDialogOpen, setDeleteDialog]= useState(false)
    const [isEditDialogOpen, setEditDialog]= useState(false)

    const handleDelete= (e)=>{
e.stopPropagation();
setDeleteDialog(true)
    }

   const handleEdit=(e)=>{
e.stopPropagation();
setEditDialog(true)
    }

    const closeDeleteDialog=()=>{
        setDeleteDialog(false)
    }

    const closeEditDialog=()=>{
        setEditDialog(false)
    }


    
    return(
        <>
<ListItem style={{backgroundColor:`#${color}`}} className={classes.Contact}>
    <ListItemText 
    primaryTypographyProps={{ classes: { root: classes.contactNames } }}
     primary={name}secondary={roll}>

     </ListItemText>
    <ListItemText  
    primaryTypographyProps={{ classes: { root: classes.contactPhones } }} primary={phoneNumber} secondary={officePhone}>

    </ListItemText>
    <ListItemText  
    primaryTypographyProps={{ classes: { root: classes.contactEmail } }}>{email}
    </ListItemText>
 
    <ListItemSecondaryAction className={classes.icons}>
<IconButton className={classes.icon} onClick={handleDelete}>
    {/* <DeleteIcon aria-label='Delete' onClick={()=>{
        removeContact(id)
    }}/> */}
    <DeleteIcon />
    </IconButton>
    <IconButton lassName={classes.icon} onClick={handleEdit}>
    <EditIcon aria-label='Edit' />
    </IconButton>
    </ListItemSecondaryAction>
    </ListItem>
<DeleteDialog 
open={isDeleteDialogOpen} 
close={closeDeleteDialog} 
removeContact={removeContact} 
deleteId={id}/>
<EdidDialog 
open= {isEditDialogOpen} 
close={closeEditDialog}
editContact={editContact}
id={id}
name={name} 
roll={roll} 
tag={tag}
phoneNumber={phoneNumber} 
email={email} 
officePhone={officePhone}
/>
        </>
    )
}

export default withStyles(styles) (Contact)

