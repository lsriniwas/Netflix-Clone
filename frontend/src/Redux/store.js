import { combineReducers, createStore, applyMiddleware } from "redux";
import { loginReducer } from "./reducers/loginReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { registerReducer } from "./register/reducer";

const reducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
});

export const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
);
