import { combineReducers } from "redux";
import counterReducer from "../features/counterSlice";
import userReducer from "../features/userSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

export default rootReducer;
