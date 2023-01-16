import { useState } from "react";

import { useHistory } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/AccessPageStyles";

import { NavLink } from "react-router-dom";

const correctPassword = process.env.REACT_APP_ACCESS;

function AccessPage({ classes }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (correctPassword === password) {
      history.push("/contacts");
    } else {
      setError("סיסמא לא נכונה");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className={classes.root}>
      <form className="form" onSubmit={handleFormSubmit}>
        <div className={classes.container}>
          <header className={classes.headForm}>
            <h2>ניהול אנשי קשר</h2>
            <p>כדי להתחבר יש להכניס את הקוד המתאים</p>
          </header>
          <div className={classes.formField}>
            <input
              onChange={handlePasswordChange}
              className={classes.formInput}
              type="password"
              value={password}
              placeholder="סיסמא"
              name="password"
              required
            />
            {error && <p className={classes.error}>{error}</p>}
            <button className={classes.signIn}> התחבר </button>
          </div>
        </div>
      </form>
      <NavLink to="/contacts">contact page</NavLink>
    </div>
  );
}
export default withStyles(styles)(AccessPage);
