const styles = {
  NewContactForm: {
    background: "lavender",
    border: " 1px solid #dedede",
    display: " flex",
    flexDirection: "column",
    justifyContent: "space-around",
    // alignItems: "center",
    margin: "0 auto",
    maxWidth: "500px",
    padding: "30px 50px",
  },

  newContactHead: {
    borderBottom: "1px solid white",
    color: "#6976d9",
    fontSize: "20px",
    fontHeight: "600",
    lineHeight: "24px",
    padding: "10px",
    textAlign: "center",
    background: "lavender",
    width: "350px",
    display: "inline-block",
    justifyContent: "center",
    alignItems: "center",

    cursor: "pointer",
    "&:hover": {
      background: "rgba(190, 190, 241,0.6)",
      boxShadow: "1px",
    },
  },
  newContactInput: {
    direction: "rtl",
    height: " 55px",
  },
  newContactLabel: {
    right: "-80%",
  },
  submitButton: {
    backgroundColor: "#818de4",
    color: "white",
    fontFamily: "sans-serif",
    fontSize: "20px",
    marginTop: "2rem",
    height: "3rem",
    borderRadius: " 20px",
    cursor: "pointer",
    "&:hover": {
      background: "rgba(147, 147, 241, 0.7)",
      boxShadow: "1px",
    },
  },
  snackbar: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  cancelSnackbar: {
    marginLeft: "0",
    marginRight: "2rem",
    color: "white",
    position: "fixed",
  },
};
export default styles;
