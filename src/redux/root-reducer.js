import { combineReducers } from "redux";
import dataReducers from "./reducer";

const rootReducer = combineReducers({
  data: dataReducers,
});

export default rootReducer;
