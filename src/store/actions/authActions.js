export const logIn = credentials => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();

		firebase
			.auth()
			.signInWithEmailAndPassword(credentials.email, credentials.password)
			.then(() => {
				dispatch({ type: "LOGIN_SUCCESS" });
			})
			.catch(err => {
				dispatch({ type: "LOGIN_ERROR", err });
			});
	};
};

export const authError = state => {
	return dispatch => {
		dispatch({ type: "LOGIN_ERROR", state });
	};
};

export const signOut = () => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();

		firebase
			.auth()
			.signOut()
			.then(() => {
				dispatch({ type: "SIGNOUT_SUCCESS" });
			});
	};
};

export const resetPassword = credentials => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();
		const email = credentials.email;

		firebase
			.auth()
			.sendPasswordResetEmail(email)
			.then(() => {
				dispatch({ type: "RESET_INSTRUCTIONS_SENT" });
			})
			.then(
				setTimeout(() => {
					dispatch({ type: "RESET_INSTRUCTIONS" });
				}, 10000)
			)
			.catch(err => {
				dispatch({ type: "WRONG_EMAIL", err });
			});
	};
};

export const signUp = newUser => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firebase = getFirebase();
		const firestore = getFirestore();

		firebase
			.auth()
			.createUserWithEmailAndPassword(newUser.email, newUser.password)
			.then(resp => {
				return firestore
					.collection("users")
					.doc(resp.user.uid)
					.set({
						// we use doc() and not add() because add would generate new id, but we need the id from auth
						firstName: newUser.firstName,
						lastName: newUser.lastName,
						initials: newUser.firstName[0] + newUser.lastName[0],

						imageURL:
							"https://firebasestorage.googleapis.com/v0/b/teamabroad-p.appspot.com/o/images%2Fdefault.png?alt=media&token=e5112385-6b42-4f83-b102-8cc55c87986d"
					});
			})
			.then(() => {
				dispatch({ type: "SIGNUP_SUCCESS" });
			})
			.catch(err => {
				dispatch({ type: "SIGNUP_ERROR", err });
			});
	};
};

// export const uploadImage = formData => dispatch => {};

// export const uploadImage = image => {
// 	return (dispatch, getState, { getFirestore, getFirestorage }) => {
// 		const firestore = getFirestore();
// 		const profile = getState().firebase.profile;
// 		const authorId = getState().firebase.auth.uid;
// 		//console.log(firestore.collection("images"));
// 		firestore
// 			.collection("users")
// 			.add({
// 				firstName: "simona"
// 			})
// 			.then(() => {
// 				dispatch({ type: "CREATE_PROJECT_SUCCESS" });
// 			})
// 			.catch(err => {
// 				dispatch({ type: "CREATE_PROJECT_ERROR" }, err);
// 			});
// 	};
// };

// ...project,
// authorFirstName: profile.firstName,
// authorLastName: profile.lastName,
// authorId: authorId,
// createdAt: new Date()
