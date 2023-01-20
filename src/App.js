import { Route, Switch } from "react-router-dom";
import AccessPage from "./AccessPage";
import ContactApp from "./ContactApp";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={AccessPage} />
        <Route exact path="/contacts" render={() => <ContactApp />} />
        <Route path="*" element={AccessPage} />
      </Switch>
    </div>
  );
}

export default App;
