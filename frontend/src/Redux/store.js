import { combineReducers, createStore, applyMiddleware } from "redux";
import { loginReducer } from "./Login/reducers/loginReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { profileReducer } from "./Profile/reducers/profileReducer";
import { registerReducer } from "./Register/reducer";
import { moviesReducer } from "./Movies/reducer";
import { seriesReducer } from "./TvShows/reducer";
import { searchReducer } from "./Search/reducer";

const reducer = combineReducers({
  login: loginReducer,
  profiles: profileReducer,
  register: registerReducer,
  movies: moviesReducer,
  series: seriesReducer,
  search:searchReducer
});

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
