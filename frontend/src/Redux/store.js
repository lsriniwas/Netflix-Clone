import { combineReducers, createStore, applyMiddleware } from "redux";
import { loginReducer } from "./Login/reducers/loginReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { profileReducer } from "./Profile/reducers/profileReducer";
import { registerReducer } from "./Register/reducer";

const reducer = combineReducers({
  login: loginReducer,
  profiles: profileReducer,
  register: registerReducer,
});

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
