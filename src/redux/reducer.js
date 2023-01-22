import { combineReducers } from "redux";

const initialState = {
  isAuthenticated: false,
};

function authentication(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isAuthenticated: true };
    case "LOGOUT":
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
}

export default combineReducers({
  authentication,
});
