import { useState } from "react"

import { Dialog, DialogTitle, TextField, Select, MenuItem } from "@material-ui/core"
import './NewContactForm.css'


 function EditContactForm({open, close, editContact, name, id, tag, roll, phoneNumber, email, officePhone}) {
  const [contact, setContact]=useState({name, roll, id, officePhone, phoneNumber,email, tag})

  const handleChange=(e)=>{

    setContact({...contact, [e.target.name]: e.target.value})
}
 
  const handleEditForm=(e)=>{
e.preventDefault()
editContact(contact)
close()
    }
  

    return (
   <Dialog open={open} onClose={close} >
    <DialogTitle>עריכת איש קשר</DialogTitle>
    <form onSubmit={handleEditForm}>
    <TextField 
fullWidth
required
className="newContact-input"
type='text' 
id='name' 
name='name' 
label='שם'
value={contact.name} 
onChange={handleChange}
/>
<TextField
fullWidth
required
className="newContact-input"
type='text' 
id='roll' 
name='roll' 
label='תפקיד'
value={contact.roll} 
onChange={handleChange}
/>
<TextField
fullWidth

className="newContact-input"
type='text' 
id='phone' 
name='phoneNumber' 
label='מספר טלפון'
value={phoneNumber} 
onChange={handleChange}
/>
<TextField
fullWidth
className="newContact-input"
type='text' 
id='officePhone' 
name='officePhone' 
label='טלפון במשרד'
value={officePhone} 
onChange={handleChange}
/>

<TextField
fullWidth
className="newContact-input"
type='text' 
id='email' 
name='email' 
label='כתובת מייל'
value={email} 
onChange={handleChange}
/>
<Select 
required
className="newContact-input"
value={tag}
name="tag"
id="tag"
labelId="tag-label"
onChange={handleChange}>

<MenuItem value="city">עירייה ומנהל החינוך</MenuItem>
<MenuItem value="matya">פיקוח ומתי"א</MenuItem>
<MenuItem value="kinder">גננות</MenuItem>
<MenuItem value="other">אחר</MenuItem>
</Select>
<button type="submit" className="submitButton">
    אישור
</button>

    </form>
   </Dialog>
    
  )
}
export default EditContactForm