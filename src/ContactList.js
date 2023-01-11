
import Contact from "./Contact"

function ContactList({contacts, color, removeContact, editContact}){
    return(
<div className="ContactList">
   

            <ul style={{padding: 0}}>
{contacts.map(c=> <Contact 
removeContact={removeContact} 
editContact={editContact}
color={color} 
key={c.id}
 {...c}/>

)}
            </ul>
      

</div>
    )
}

export default ContactList