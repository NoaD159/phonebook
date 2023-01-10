import { useState } from "react";

import { Dialog } from "@mui/material";
import { Avatar, DialogTitle, List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import { Close, Delete } from "@mui/icons-material";

import './DeleteDialog.css'

function DeleteDialog({open, close, removeContact, deleteId}){

  const deleteContact=(deleteId)=>{
    removeContact(deleteId)
  }

    return( <Dialog open={open} onClose={close}>
        <DialogTitle> למחוק איש קשר?</DialogTitle>
        <List>
            <ListItem button onClick={close} >
            <ListItemAvatar >
                <Avatar className="close-avatar" style={{ backgroundColor: 'rgb(122, 122, 237)' }}>
                    <Close/>
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary='בטל'/>
            </ListItem>
            <ListItem button onClick={()=>{deleteContact(deleteId)}} >
                  <ListItemAvatar>
                    <Avatar className="delete-avatar" style={{ backgroundColor: 'rgb(239, 134, 134)' }}>
                      <Delete/>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary='מחק' />
                </ListItem>
        </List>
     </Dialog>)

}

export default DeleteDialog