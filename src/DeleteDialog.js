import { useState } from "react";

// import { Dialog } from "@mui/material";
// import { Avatar, DialogTitle, List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
// import { Close, Delete } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo, faTrash } from '@fortawesome/free-solid-svg-icons'

import './DeleteDialog.css'


function DeleteDialog({open, close, removeContact, deleteId}){

  const deleteContact=(deleteId)=>{
    removeContact(deleteId)
  }

    return( 
    <div className="dealog-container">
<div className="dialog">
<div className="dialog-paper">
<div className="dialog-title">
  <h2>למחוק איש קשר?</h2>
</div>
<ul className="dialog-list">
<li className="list-item list-item-cancel" onClick={close}>
  <div className="list-item-icon">
    <FontAwesomeIcon icon={faUndo} className="deleteDealog-icon" />
  </div>
<div className="list-item-text-container">
<span className="list-item-text">בטל</span>
</div>
</li>
<li className="list-item list-item-delete" onClick={()=>{deleteContact(deleteId)}}>
  <div className="list-item-icon">
    <FontAwesomeIcon icon={faTrash} className="deleteDealog-icon" />
  </div>
<div className="list-item-text-container">
<span className="list-item-text">מחק</span>
</div>
</li>
</ul>
</div>
</div>

    </div> 
     )

}

export default DeleteDialog






{/* <Dialog open={open} onClose={close}>
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
     </Dialog> */}