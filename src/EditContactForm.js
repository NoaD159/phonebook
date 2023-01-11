import { useState } from "react"

// import { Dialog, DialogTitle, TextField, Select, MenuItem } from "@material-ui/core"
import './EditContactForm.css'



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
   
      <div className="edit-dialog">

      <div onfocusout={close} className="dialog-container">
        <div className="dialog-paper">
<div className="dialog-title">
  <h2 className="">
    עריכת איש קשר
  </h2>
</div>

<form onSubmit={handleEditForm}>

<div className="newContact-input">
<label htmlFor="name" className="input-label">שם</label>
<input 
required
className="input input-name"
type='text' 
id='name' 
name='name' 
value={contact.name} 
onChange={handleChange}
 />
</div>

<div className="newContact-input">
<label htmlFor="roll" className="input-label">תפקיד</label>
<input 
required
className="input input-roll"
type='text' 
id='roll' 
name='roll' 
value={contact.roll} 
onChange={handleChange}
 />
</div>

<div className="newContact-input">
<label htmlFor="phone" className="input-label">מספר טלפון</label>
<input 
className="input input-phone"
type='text' 
id='phone' 
name='phoneNumber' 
value={contact.phoneNumber} 
onChange={handleChange}
 />
</div>

<div className="newContact-input">
<label htmlFor="officePhone" className="input-label">טלפון במשרד</label>
<input 
className="input input-officePhone"
type='text' 
id='officePhone' 
name='officePhone' 
value={contact.officePhone} 
onChange={handleChange}
 />
</div>

<div className="newContact-input">
<label htmlFor="email" className="input-label">כתובת מייל</label>
<input 
className="input input-email"
type='email' 
id='email' 
name='email' 
value={contact.email} 
onChange={handleChange}
 />
</div>

<select className="newContact-tag" value={contact.tag} name="tag" id="tag" onChange={handleChange}>
<option value="city">עירייה ומנהל החינוך</option>
<option value="matya">פיקוח ומתי"א</option>
<option value="kinder">גננות</option>
<option value="other">אחר</option>
</select>

<button type="submit" className="submitButton">
    אישור
</button>

</form>
</div>

      </div>

      </div>

     
  )
}
export default EditContactForm







//    <Dialog open={open} onClose={close} >
//     <DialogTitle>עריכת איש קשר</DialogTitle>
//     <form onSubmit={handleEditForm}>
//     <TextField 
// fullWidth
// required
// className="newContact-input"
// type='text' 
// id='name' 
// name='name' 
// label='שם'
// value={contact.name} 
// onChange={handleChange}
// />
// <TextField
// fullWidth
// required
// className="newContact-input"
// type='text' 
// id='roll' 
// name='roll' 
// label='תפקיד'
// value={contact.roll} 
// onChange={handleChange}
// />
// <TextField
// fullWidth

// className="newContact-input"
// type='text' 
// id='phone' 
// name='phoneNumber' 
// label='מספר טלפון'
// value={phoneNumber} 
// onChange={handleChange}
// />
// <TextField
// fullWidth
// className="newContact-input"
// type='text' 
// id='officePhone' 
// name='officePhone' 
// label='טלפון במשרד'
// value={officePhone} 
// onChange={handleChange}
// />

// <TextField
// fullWidth
// className="newContact-input"
// type='text' 
// id='email' 
// name='email' 
// label='כתובת מייל'
// value={email} 
// onChange={handleChange}
// />
// <Select 
// required
// className="newContact-input"
// value={tag}
// name="tag"
// id="tag"
// labelId="tag-label"
// onChange={handleChange}>

// <MenuItem value="city">עירייה ומנהל החינוך</MenuItem>
// <MenuItem value="matya">פיקוח ומתי"א</MenuItem>
// <MenuItem value="kinder">גננות</MenuItem>
// <MenuItem value="other">אחר</MenuItem>
// </Select>
// <button type="submit" className="submitButton">
//     אישור
// </button>

//     </form>
//    </Dialog>
 