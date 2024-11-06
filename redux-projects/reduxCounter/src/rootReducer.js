import userReducer from "./userReducer";
import counterReducer from "./counterReducer";
import {combineReducers} from "redux"

const rootReducer = combineReducers({
    counter: counterReducer,
    user : userReducer
})


export default rootReducer;