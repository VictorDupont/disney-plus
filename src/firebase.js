import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
	apiKey: "AIzaSyDeDEyMe2tVW2EBZGvuQmtHW2me5LrEiZ8",
	authDomain: "disney-plus-7df9b.firebaseapp.com",
	projectId: "disney-plus-7df9b",
	storageBucket: "disney-plus-7df9b.appspot.com",
	messagingSenderId: "895222760781",
	appId: "1:895222760781:web:927b16521b89342f40e304",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
