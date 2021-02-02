import {combineReducers, createStore, applyMiddleware} from "redux";
import { loginReducer } from "./reducers/loginReducer";
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"

const reducer = combineReducers({
    login: loginReducer
})

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))