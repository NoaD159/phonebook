import React from "react";
import { render } from "react-dom/";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store.js";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import LoadingSpinner from "./LoadingSpinner";

const root = document.getElementById("root");

render(
  <Provider store={store}>
    <PersistGate loading={<LoadingSpinner />} persistor={persistor}>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  root
);

reportWebVitals();
