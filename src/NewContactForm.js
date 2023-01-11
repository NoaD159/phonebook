import { useState } from "react";

import UseToggleState from './hooks/UseToggleState'

import './NewContactForm.css'
function NewContactForm({addContact}){

    const newContactResetForm={
    name:"",
    roll:"",
    phoneNumber:"",
    officePhone:"",
    email:"",
    tag:"city",}

const [newContact, setNewContact]= useState(newContactResetForm)
// const [errors, setErrors] = useState({} as any);

const [isFormOpen, toggleForm]= UseToggleState(false)


const handleChange=(e)=>{
    setNewContact({...newContact, [e.target.name]: e.target.value})
}

const handleFormSubmit=(e)=>{
    e.preventDefault()
     addContact(newContact);
  setNewContact(newContactResetForm)
}


    return( 
    <div className="NewContactForm">

        <h3 className="make-new-contact-title" onClick={toggleForm}>הוסף איש קשר חדש</h3>
{isFormOpen && 
 <form className="newContact-form" onSubmit={handleFormSubmit}>
    <label htmlFor="name">שם</label>
<input className="newContact-name" type='text' id='name' name='name' required value={newContact.name} onChange={handleChange} />
<label htmlFor='roll'>תפקיד</label>
<input className="newContact-roll" type='text' id='roll' name='roll' required value={newContact.roll} onChange={handleChange} />
<label htmlFor='phone'>מספר טלפון</label>
<input className="newContact-phone" type='text' id='phone' name='phoneNumber' value={newContact.phoneNumber} onChange={handleChange} />
<label htmlFor='officePhone'> טלפון במשרד</label>
<input className="newContact-officePhone" type='text' id='officePhone' name='officePhone' value={newContact.officePhone} onChange={handleChange} />
<label htmlFor='email'> כתובת מייל</label>
<input className="newContact-email" type='email' id='email' name='email' value={newContact.email} onChange={handleChange} />


<select className="newContact-tag" name="tag" id="tag" onChange={handleChange}>
<option value="city">עירייה ומנהל החינוך</option>
<option value="matya">פיקוח ומתי"א</option>
<option value="kinder">גננות</option>
<option value="other">אחר</option>
</select>
<button className="submitButton">הוסף איש קשר</button>
</form>
        }
       
    </div>)
   

}

export default NewContactForm