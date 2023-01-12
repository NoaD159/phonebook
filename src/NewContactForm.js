import {Box ,Button,InputLabel,MenuItem,Select,TextField } from "@material-ui/core";
import { useState } from "react";

import UseToggleState from './hooks/UseToggleState'


import { withStyles } from "@material-ui/styles";
import styles from './styles/NewContactFormStyles'

function NewContactForm({addContact, classes}){

    const newContactResetForm={
    name:"",
    roll:"",
    phoneNumber:"",
    officePhone:"",
    email:"",
    tag:"city",
}
const [newContact, setNewContact]= useState(newContactResetForm)
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

        <h3 className={classes.newContactHead} onClick={toggleForm}>הוסף איש קשר חדש</h3>
{isFormOpen && 


<form onSubmit={handleFormSubmit}  className={classes.NewContactForm}>
<div>
<TextField 
fullWidth
required
className={classes.newContactInput}
type='text' 
id='name' 
name='name' 
label='שם'
InputLabelProps={{ classes: { root: classes.newContactLabel } }}
value={newContact.name} 
onChange={handleChange}

//  error
//  helperText="No Value added in this field"
>
</TextField>

<TextField
fullWidth
required
className={classes.newContactInput}
type='text' 
id='roll' 
name='roll'
label="תפקיד"  
InputLabelProps={{ classes: { root: classes.newContactLabel } }}
value={newContact.roll} 
onChange={handleChange}>
</TextField>

<TextField 
fullWidth
className={classes.newContactInput}
inputMode="decimal"
type='text' 
id='phone' 
name='phoneNumber' 
label="מספר טלפון"
InputLabelProps={{ classes: { root: classes.newContactLabel } }}
value={newContact.phoneNumber} 
onChange={handleChange}>

</TextField>

<TextField 
fullWidth
className={classes.newContactInput}
type='text' 
id='officePhone' 
name='officePhone' 
label="טלפון במשרד"
InputLabelProps={{ classes: { root: classes.newContactLabel } }}
value={newContact.officePhone} 
onChange={handleChange}>
InputLabelProps={{style : {color : 'green'} }}
</TextField>

<TextField
fullWidth 
className={classes.newContactInput}
type='email' 
id='email' 
name='email' 
label="כתובת מייל"
InputLabelProps={{ classes: { root: classes.newContactLabel } }}
value={newContact.email} 
onChange={handleChange}>

</TextField>
</div>

<Select 
required

className={classes.newContactInput}
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
className={classes.submitButton}>הוסף איש קשר</button>
</form>
        }
       
    </div>)
   

}

export default withStyles(styles) (NewContactForm);





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