import { combineReducers, createStore, applyMiddleware } from "redux";
import { loginReducer } from "./reducers/loginReducer";
<<<<<<< HEAD
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"
import { profileReducer } from "./reducers/profileReducer";

const reducer = combineReducers({
    login: loginReducer,
    profiles: profileReducer
})
=======
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { registerReducer } from "./register/reducer";

const reducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
});
>>>>>>> c5302f16f2adfb2a308676c570f4490b48df8b62

export const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
);
