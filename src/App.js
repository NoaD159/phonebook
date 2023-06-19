import { useEffect } from "react";
import { Route, Switch, useHistory, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import AccessPage from "./pages/AccessPage";
import ContactApp from "./pages/ContactApp";
import WithAuth from "./components/WithAuth";
import "./styles/App.css";

function App({ isAuthenticated, login, logout }) {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/index");
      login();
    }
  }, [isAuthenticated, history]);

  const handleAuth = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/contacts`)
      .then(() => login())
      .catch((e) => console.log(e));
    // setIsAuthenticated(true);
  };

  return (
    <div className="App">
      {/* <button onClick={() => logout()}>logout</button> */}
      <Switch>
        <Route
          exact
          path="/"
          render={() => <AccessPage onAuth={handleAuth} />}
        />
        <Route exact path="/index" component={WithAuth(ContactApp)} />

        <Route path="*">
          <Redirect to="/index" />
        </Route>
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
