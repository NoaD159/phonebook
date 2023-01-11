import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPencil } from "@fortawesome/free-solid-svg-icons";

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

        <li style={{backgroundColor:`#${color}`}} className="Contact" >
<div className="contact-container">
<div className="contact-text contact-text-names">
    <span>{name}</span>
    <p >{roll}</p>
</div>
<div className="contact-text contact-text-phones">
<span>{phoneNumber}</span>
    <p >{officePhone}</p>
</div>
<div className="contact-text contact-text-email">
<span>{email}</span>
    
</div>
</div>
<div className="icons">
<FontAwesomeIcon onClick={handleDelete} className="icon" icon={faTrash} />
<FontAwesomeIcon onClick={handleEdit} className="icon" icon={faPencil} />
</div>
        </li>

{isDeleteDialogOpen &&
<DeleteDialog 
open={isDeleteDialogOpen} 
close={closeDeleteDialog} 
removeContact={removeContact} 
deleteId={id}/>

}


{isEditDialogOpen && 
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
}

        </>
    )
}

export default Contact

