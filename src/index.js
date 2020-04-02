import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers/rootReducer";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import fbConfig from "./config/fbConfig";
import { BrowserRouter } from "react-router-dom";
import "./assets/sass/base/customBootstrap.scss";
import "./main.scss";

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
		reactReduxFirebase(fbConfig, {
			useFirestoreForProfile: true,
			userProfile: "users",
			attachAuthIsReady: true
		}),
		reduxFirestore(fbConfig)
	)
);

store.firebaseAuthIsReady.then(() => {
	ReactDOM.render(
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>,
		document.getElementById("root")
	);
});
