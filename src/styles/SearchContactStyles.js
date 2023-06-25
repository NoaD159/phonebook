const styles = {
  SearchContact: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  searchHead: {
    borderBottom: "1px solid white",
    color: "#ac89c1",
    fontSize: "20px",
    lineHeight: "24px",
    padding: "10px",
    textAlign: "center",
    width: "350px",
    background: "#e2d1ec",
    cursor: "pointer",
    "&:hover": {
      background: "rgba(177, 149, 193, 0.6)",
      boxShadow: "1px",
    },
  },
  autocomplete: {
    borderRadius: "15px",
    margin: "0.5rem",
    width: "350px",
  },
  searchTextField: {
    // borderRadius: "15px",
  },
  searchContactLabel: {
    shrink: "false !important",
  },
};

export default styles;
