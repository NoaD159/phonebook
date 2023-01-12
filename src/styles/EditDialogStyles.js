export default {
    EditContactForm:{
      background: "lavender",
      border:" 1px solid #dedede",
      display:" flex",
      flexDirection: "column",
      justifyContent: "space-around",
      margin: "0 auto",
      maxWidth: "500px",
      padding:" 30px 50px",
    },
  
    editContactHead:{
      borderBottom: "1px solid white",
      color: "#6976d9",
      fontSize: "30px",
      fontWeight: "600",
      padding: "10px",
      textAlign: "center",
      background: "rgba(190, 190, 241,0.8)",
      cursor: "pointer",
   
    },
    editContactInput:{
      direction: "rtl",
      height:" 55px",
    
    },
   editContactLabel:{
  
   left:"50%",
    },
    submitButton:{
      backgroundColor: "#818de4",
      color: "white",
    
      fontSize: "20px",
      marginTop: "1rem",
      marginBottom:"1rem",
      height: "3rem",
      borderRadius:" 20px",
      cursor: "pointer",
      '&:hover': {
        background: "rgba(147, 147, 241, 0.7)",
        boxShadow: "1px",
      },
    },
  }