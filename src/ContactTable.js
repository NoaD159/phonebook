import { useState } from "react"
import { Select, MenuItem, InputLabel } from "@material-ui/core"
import ContactList from "./ContactList"
import { withStyles } from "@material-ui/styles"
import { Margin } from "@mui/icons-material"

   const styles={
    selectContainer: {
         margin:"1rem 1rem",
      marginBottom: "2rem"
        },
        selectTag:{
            fontFamily: "'Varela Round', sans-serif"
        }
    }


function ContactTable({classes,contacts, removeContact, editContact}){
 
    const [filterByTag, setFilterByTag]= useState("all")

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
    }})

    const tagInfo= [
        {tagName: "matya", color: 'c5626233', head: 'פיקוח ומתי"א', contacts: matyaContactList},
        {tagName: "city", color: 'a5e19a33', head: 'עירייה',  contacts: cityContactList},
        {tagName: "kinder", color: 'dd80b333', head: 'גני הילדים',  contacts: kinderContactList},
        {tagName: "other", color: 'ccdd8033', head: 'אחר',  contacts: otherList},
    ]

    const handleTagChange=(e)=>{
        setFilterByTag(e.target.value)
    }


    const noFilterList= tagInfo.map(tag=>
        <div>
            <h3 
            style={{backgroundColor: tag.color}}>{tag.head}</h3>
        <ContactList  
        removeContact={removeContact}  
        editContact={editContact}
        color={tag.color}
contacts={tag.contacts}
key={tag.tagName}

        />
        </div>
        )
    
return(
    <div>
    <h2>טלפונים שימושיים</h2>
    <div className={classes.selectContainer}>
    <InputLabel id="filter-tag-label">סנן לפי תוית</InputLabel>
<Select 
className={classes.selectTag}
value={filterByTag}
label="סנן לפי תוית"
labelId="filter-tag-label"
onChange={handleTagChange}

>
<MenuItem className={classes.selectTag} value="all">הכל</MenuItem>
<MenuItem className={classes.selectTag} value="city">עירייה ומנהל החינוך</MenuItem>
<MenuItem className={classes.selectTag} value="matya">פיקוח ומתי"א</MenuItem>
<MenuItem className={classes.selectTag} value="kinder">גננות</MenuItem>
<MenuItem className={classes.selectTag} value="other">אחר</MenuItem>
</Select>
</div>

  
   
{filterByTag === 'all' ? 
noFilterList :


tagInfo.map((tag, i)=> {if(tag.tagName=== filterByTag){

    return <ContactList 
  removeContact={removeContact}  
  editContact={editContact}
  color={tag.color}
contacts={tag.contacts}
/>

}})

}


</div>
  



)

}

export default withStyles(styles) (ContactTable);

{/* <div>
  <h3 style={{backgroundColor: '#c5626233'}}>פיקוח ומתי"א</h3>

<ContactList color='c5626233' contacts={matyaContactList} removeContact={removeContact}  editContact={editContact} />

<h3  style={{backgroundColor: '#a5e19a33'}}>עירייה</h3>
<ContactList color='a5e19a33' contacts={cityContactList} removeContact={removeContact}  editContact={editContact} />

<h3  style={{backgroundColor: '#dd80b333'}}>גני הילדים</h3>
<ContactList color='dd80b333' contacts={kinderContactList} removeContact={removeContact}  editContact={editContact} />

<h3  style={{backgroundColor: '#ccdd8033'}}>אחר</h3>
<ContactList color='ccdd8033' contacts={otherList} removeContact={removeContact}  editContact={editContact} />

    </div> */}
