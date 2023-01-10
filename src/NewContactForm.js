import {Box ,Button,InputLabel,MenuItem,Select,TextField } from "@material-ui/core";
import { useState } from "react";
import UseInputState from "./hooks/UseInputState";
import UseToggleState from './hooks/UseToggleState'

import './NewContactForm.css'
function NewContactForm({addContact}){

    const newContactResetForm={
    name:"",
    roll:"",
    phoneNumber:"",
    officePhone:"",
    email:"",
    tag:"city",
}
const [newContact, setNewContact]= useState(newContactResetForm)
// const [errors, setErrors] = useState({} as any);

const [isFormOpen, toggleForm]= UseToggleState(false)


// const [newContactName, setNewContactName,resetName]= UseInputState("")
// const [newContactRoll, setNewContactRoll,resetRoll]= UseInputState("")
// const [newContactPhone, setNewContactPhone,resetPhone]= UseInputState("")
// const validate: any = (fieldValues = values) =>{
    
// }

const handleChange=(e)=>{

    setNewContact({...newContact, [e.target.name]: e.target.value})
}

const handleFormSubmit=(e)=>{
    e.preventDefault()
     addContact(newContact);
  setNewContact(newContactResetForm)
}

// const  validateNumericInput=()=> {
//     // Get the value of the input field with id="numb"
//     let x = document.getElementById('phone').value;
//     // If x is Not a Number or less than one or greater than 10
//     let text;
//     if (isNaN(x) || x[0] !== "0") {
//       text = "ערך לא חוקי";
//     } else {
//       text = "נראה טוב";
//     }

//   }

    return( 
    <div className="NewContactForm">

        <h3 className="form-head" onClick={toggleForm}>הוסף איש קשר חדש</h3>
{isFormOpen && 
//  <form onSubmit={e=>{
//             e.preventDefault();
//           addContact(newContact);
//           setNewContact({
//             name:"",
//             roll:"",
//             phoneNumber:"",
//             officePhone:"",
//             email:"",
//             tag:"city",
//         })
//         }}>
//             <label htmlFor="name">שם</label>
// <input className="newContact-name" type='text' id='name' name='name' required value={newContact.name} onChange={handleChange} />
// <label htmlFor='roll'>תפקיד</label>
// <input className="newContact-roll" type='text' id='roll' name='roll' required value={newContact.roll} onChange={handleChange} />
// <label htmlFor='phone'>מספר טלפון</label>
// <input className="newContact-phone" type='text' id='phone' name='phoneNumber' value={newContact.phoneNumber} onChange={handleChange} />
// <label htmlFor='officePhone'> טלפון במשרד</label>
// <input className="newContact-officePhone" type='text' id='officePhone' name='officePhone' value={newContact.officePhone} onChange={handleChange} />
// <label htmlFor='email'> כתובת מייל</label>
// <input className="newContact-email" type='email' id='email' name='email' value={newContact.email} onChange={handleChange} />

// <label htmlFor="tag">תוית</label>
// <select className="newContact-tag" name="tag" id="tag" onChange={handleChange}>
//   <option value="city">עירייה ומנהל החינוך</option>
//   <option value="matya">פיקוח ומתי"א</option>
//   <option value="kinder">גננות</option>
//   <option value="other">אחר</option>
// </select>
// <button className="submitButton">הוסף איש קשר</button>
//         </form>

<form onSubmit={handleFormSubmit}  className="NewContactForm">
<div>
<TextField 
fullWidth
required
className="newContact-input"
type='text' 
id='name' 
name='name' 
label='שם'
value={newContact.name} 
onChange={handleChange}
//  error
//  helperText="No Value added in this field"
>
</TextField>

<TextField
fullWidth
required
className="newContact-input"
type='text' 
id='roll' 
name='roll'
label="תפקיד"  
value={newContact.roll} 
onChange={handleChange}>
</TextField>

<TextField 
fullWidth
className="newContact-input"
inputMode="decimal"
type='text' 
id='phone' 
name='phoneNumber' 
label="מספר טלפון"
value={newContact.phoneNumber} 
onChange={handleChange}>

</TextField>

<TextField 
fullWidth
className="newContact-input"
type='text' 
id='officePhone' 
name='officePhone' 
label="טלפון במשרד"
value={newContact.officePhone} 
onChange={handleChange}>
InputLabelProps={{style : {color : 'green'} }}
</TextField>

<TextField
fullWidth 
className="newContact-input"
type='email' 
id='email' 
name='email' 
label="כתובת מייל"
value={newContact.email} 
onChange={handleChange}>

</TextField>
</div>

<Select 
required

className="newContact-input"
value="city"
name="tag"
id="tag"
labelId="tag-label"

onChange={handleChange}>

<MenuItem value="city">עירייה ומנהל החינוך</MenuItem>
<MenuItem value="matya">פיקוח ומתי"א</MenuItem>
<MenuItem value="kinder">גננות</MenuItem>
<MenuItem value="other">אחר</MenuItem>
</Select>
{/* <Button 
className="submitButton"
onClick={e=>{
e.preventDefault();
addContact(newContact);
setNewContact({
name:"",
roll:"",
phoneNumber:"",
officePhone:"",
email:"",
tag:"city",
})
}}
>הוסף איש קשר</Button> */}
<button 
type="submit"
className="submitButton"
// onClick={e=>{
//     e.preventDefault();
//   addContact(newContact);
//   setNewContact({
//     name:"",
//     roll:"",
//     phoneNumber:"",
//     officePhone:"",
//     email:"",
//     tag:"city",
// })
// }}
>הוסף איש קשר</button>
</form>
        }
       
    </div>)
   

}

export default NewContactForm