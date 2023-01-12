import { useState } from "react";

import { Dialog } from "@mui/material";
import { Avatar, DialogTitle, List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import { Close, Delete } from "@mui/icons-material";


function DeleteDialog({open, close, removeContact, deleteId}){

  const deleteContact=(deleteId)=>{
    removeContact(deleteId)
  }

    return( <Dialog open={open} onClose={close}>
        <DialogTitle style={{background: "rgba(239, 128, 158, 0.4)" }}> למחוק איש קשר?</DialogTitle>
        <List>
            <ListItem button onClick={close} >
            <ListItemAvatar >
                <Avatar style={{ backgroundColor: 'rgba(122, 122, 258,0.8)',  }}>
                    <Close/>
                </Avatar>
            </ListItemAvatar>
            <ListItemText style={{ textAlign: "center"}} primary='בטל'/>
            </ListItem>
            <ListItem button onClick={()=>{deleteContact(deleteId)}} >
                  <ListItemAvatar>
                    <Avatar style={{ backgroundColor: 'rgba(243, 134, 134,0.9)' }}>
                      <Delete/>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText  style={{ textAlign: "center"}} primary='מחק' />
                </ListItem>
        </List>
     </Dialog>)

}

export default DeleteDialog