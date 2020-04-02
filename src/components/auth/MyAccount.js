import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
//import profileImg from "../../assets/images/profile2.png";
import { getFirestore } from "redux-firestore";
import { storage } from "../../config/fbConfig";
import { MdEdit } from "react-icons/md";

class MyAccount extends Component {
	state = {
		image: null,
		url: "",
		progress: 0
	};

	componentDidMount() {
		setTimeout(() => {
			window.scroll(0, 0);
		}, 200);
	}

	handleEditFile = () => {
		const fileInput = document.getElementById("imageInput");
		fileInput.click();
	};

	fileSelectedHandler = e => {
		const image = e.target.files[0];
		// this.setState({
		// 	image
		// });
		const upload = storage.ref(`images/${image.name}`).put(image);
		const firestore = getFirestore();

		upload.on(
			"state_changed",
			snapshot => {
				//progress function
				// const progress = Math.round(
				// 	(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				// );
				// this.setState({
				// 	progress
				// });
			},
			error => {
				//error function
				console.log(error);
			},
			() => {
				//complete function
				storage
					.ref("images")
					.child(image.name)
					.getDownloadURL()
					.then(url => {
						firestore
							.collection("users")
							.doc(this.props.auth.uid)
							.update({
								imageURL: url
							});
					});
			}
		);
	};

	render() {
		const { profile, auth } = this.props;
		//console.log(auth.photoURL);
		if (!auth.uid) return <Redirect to='/' />;
		return (
			<div className='my-account'>
				<div className='profile-header'>
					<div className='profile-image'>
						<img src={profile.imageURL} alt='profile' />
					</div>
					<MdEdit size={23} onClick={this.handleEditFile} />

					<h2>
						{profile.firstName} {profile.lastName}
					</h2>
					<input
						type='file'
						id='imageInput'
						hidden='hidden'
						onChange={this.fileSelectedHandler}
					/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		profile: state.firebase.profile,
		auth: state.firebase.auth,
		firestore: state.firestore,
		firebase: state.firebase
	};
};

const mapDispatchToProps = dispatch => {
	return {
		//uploadImage: creds => dispatch(uploadImage(creds)),
		resetAuth: () => dispatch({ type: "RESET_AUTH" })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);

//	console.log(storage);

//const firebase = getFirebase();
//const user = firebase.auth().currentUser;
//const storageRef = firebase.storage().ref();

// 	user
// 		.updateProfile({
// 			displayName: "Jane Q. User",
// 			photoURL: "gs://teamabroad-p.appspot.com/paris3.png"
// 		})
// 		.then(function() {
// 			// Update successful.
// 		})
// 		.catch(function(error) {
// 			// An error happened.
// 		});

//const { selectedFile } = this.state;
//const upload = storage.ref;
// const firestore = getFirestore();
// const user = this.props.firebase.auth.uid;
// console.log(user);
// firestore
// 	.collection("users")
// 	.doc(user)
// 	.set({
// 		// we use doc() and not add() because add would generate new id, but we need the id from auth
// 		firstName: "raisrame"
// 	});
