import authReducer from "./authReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import programReducer from "./programReducer";
import serviceReducer from "./serviceReducer";
import contactReducer from "./contactReducer";


const rootReducer = combineReducers({
  programInfo: programReducer,
  message: contactReducer,
  serviceInfo: serviceReducer,
  auth: authReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
