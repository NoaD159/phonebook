import { useState } from "react";
import { ListItemSecondaryAction,ListItem, ListItemText,IconButton  } from "@material-ui/core"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import DeleteDialog from "./DeleteDialog";
import './Contact.css'
import EditContactForm from "./EditContactForm";


function Contact({name, roll, phoneNumber, email, tag, officePhone, color, removeContact, editContact, id},props){
 
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
<ListItem style={{backgroundColor:`#${color}`}} className="Contact">
    <ListItemText className="Contact-name" primary={name}secondary={roll}></ListItemText>
    <ListItemText className="Contact-phones" primary={phoneNumber} secondary={officePhone}></ListItemText>
    <ListItemText className="Contact-email">{email}</ListItemText>
 
    <ListItemSecondaryAction>
<IconButton>
    {/* <DeleteIcon aria-label='Delete' onClick={()=>{
        removeContact(id)
    }}/> */}
    <DeleteIcon onClick={handleDelete}/>
    </IconButton>
    <IconButton>
    <EditIcon aria-label='Edit' onClick={handleEdit}/>
    </IconButton>
    </ListItemSecondaryAction>
    </ListItem>
<DeleteDialog 
open={isDeleteDialogOpen} 
close={closeDeleteDialog} 
removeContact={removeContact} 
deleteId={id}/>
<EditContactForm 
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

export default Contact

