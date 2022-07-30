import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAaS-rurJbVWzUFCnvHCRWGFphOKkRHl64",
  authDomain: "amzon-clone-da005.firebaseapp.com",
  projectId: "amzon-clone-da005",
  storageBucket: "amzon-clone-da005.appspot.com",
  messagingSenderId: "154302258899",
  appId: "1:154302258899:web:daf3ceedc9bb82ed9ebe26",
  measurementId: "G-X4361LHXSK",
};
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
