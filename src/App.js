import { useEffect, useState } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import AccessPage from "./AccessPage";
import ContactApp from "./ContactApp";
import "./App.css";

function App({ isAuthenticated, login, logout }) {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/contacts");
    }
  }, [isAuthenticated, history]);

  const handleAuth = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/contacts`)
      .then(() => login())
      .catch((e) => console.log(e));
    // setIsAuthenticated(true);
  };

  return (
    <div className="App">
      <button onClick={() => logout()}>logout</button>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <AccessPage onAuth={handleAuth} />}
        />
        <Route
          path="/contacts"
          render={() =>
            isAuthenticated ? <ContactApp /> : <Redirect to="/" />
          }
        />

        {/* <Route path="*" element={AccessPage} /> */}
      </Switch>
    </div>
  );
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.authentication.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch({ type: "LOGIN" }),
  logout: () => dispatch({ type: "LOGOUT" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
