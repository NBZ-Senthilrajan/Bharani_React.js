import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import OperationReducer from "../slices/operations";

const reducer = combineReducers({
  OperationState: OperationReducer,
});
export default configureStore({
  reducer,
  //middleware - to run actions in asyncronous
  middleware: [thunk],
});
