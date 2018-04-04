import firebase from "firebase";
import ReduxSagaFirebase from "redux-saga-firebase";

// Initialize Firebase
const config = {
	apiKey: "AIzaSyBHhYPkqB3oBTWNvqiEW-_sTwA5BW92yO8",
	authDomain: "pistories-39aeb.firebaseapp.com",
	databaseURL: "https://pistories-39aeb.firebaseio.com",
	projectId: "pistories-39aeb",
	storageBucket: "pistories-39aeb.appspot.com",
	messagingSenderId: "441844936570"
};

const fire = firebase.initializeApp(config);
const rsf = new ReduxSagaFirebase(fire);
export default rsf;
