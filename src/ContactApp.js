import { useState } from "react"
import { v4 as uuid } from 'uuid';

import {initialContacts} from "./seeds/initialContact";
import NewContactForm from "./NewContactForm"
import ContactTable from "./ContactTable";


function ContactApp(){
    const [contacts, setContacts]= useState(initialContacts)

    const addContact= (newContact)=>{
        setContacts([...contacts,
             {id:uuid(), ...newContact }])
                 }
const removeContact=(contactId)=>{
    const updatedContacts = contacts.filter(contact => contact.id !== contactId);
setContacts(updatedContacts)
}

const editContact=(contact)=>{
  
        const updatedContacts = contacts.map(c =>{
            if(contact.id === c.id){
                return contact
            } else {
                return c 
            }} );
  
        setContacts(updatedContacts)

}

// editTodo: (todoId, newTask) => {
//     const updatedTodos = todos.map(todo =>
//       todo.id === todoId ? { ...todo, task: newTask } : todo
//     );
//     setTodos(updatedTodos);
//   }

return(
    <div className="ContactApp">
        <h1>אנשי קשר- חולון</h1>
 <NewContactForm addContact={addContact}/>
<ContactTable  contacts={contacts} removeContact={removeContact} editContact={editContact} />
 {/* <DeleteDialog open={isDialogOpen} close={toggleDeleteDialog}/> */}
   
       

</div>)
}

export default ContactApp