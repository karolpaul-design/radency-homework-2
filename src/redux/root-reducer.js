import { notesReducer } from "./notesTable-reducer";
import { combineReducers } from "redux";
export const rootReducer = combineReducers({
  notesReducer,
});
