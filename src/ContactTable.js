import ContactList from "./ContactList"

function ContactTable({contacts, removeContact, editContact}){
    

   const matyaContactList=[]
   const cityContactList=[]
   const kinderContactList=[]
   const otherList=[]
contacts.map(contact=>{
    if(contact.tag=== "matya"){
matyaContactList.push(contact)
    } else if(contact.tag==="city"){
        cityContactList.push(contact)
    } else if(contact.tag==='kinder'){
        kinderContactList.push(contact)
    } else{
otherList.push(contact)
    }

}
    )

    
return(
    <div>
    <h2>טלפונים שימושיים</h2>

    <h3 style={{backgroundColor: '#c5626233'}}>פיקוח ומתי"א</h3>

<ContactList color='c5626233' contacts={matyaContactList} removeContact={removeContact}  editContact={editContact} />

<h3  style={{backgroundColor: '#a5e19a33'}}>עירייה</h3>
<ContactList color='a5e19a33' contacts={cityContactList} removeContact={removeContact}  editContact={editContact} />

<h3  style={{backgroundColor: '#dd80b333'}}>גני הילדים</h3>
<ContactList color='dd80b333' contacts={kinderContactList} removeContact={removeContact}  editContact={editContact} />

<h3  style={{backgroundColor: '#ccdd8033'}}>אחר</h3>
<ContactList color='ccdd8033' contacts={otherList} removeContact={removeContact}  editContact={editContact} />

</div>

)

}

export default ContactTable