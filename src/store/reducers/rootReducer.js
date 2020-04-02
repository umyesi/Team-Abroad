import authReducer from "./authReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import programReducer from "./programReducer";
import serviceReducer from "./serviceReducer";
import contactReducer from "./contactReducer";
//import firebase from "firebase/app";
//import "firebase/storage";

const rootReducer = combineReducers({
	programInfo: programReducer,
	contact: contactReducer,
	serviceInfo: serviceReducer,
	auth: authReducer,
	firestore: firestoreReducer,
	firebase: firebaseReducer
	//firestorage: firebase.storage()
});

export default rootReducer;
