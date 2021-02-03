import {combineReducers, createStore, applyMiddleware} from "redux";
import { loginReducer } from "./reducers/loginReducer";
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"
import { profileReducer } from "./reducers/profileReducer";

const reducer = combineReducers({
    login: loginReducer,
    profiles: profileReducer
})

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))