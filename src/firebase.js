import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

/* var config = {
  apiKey: "AIzaSyCREQMYIbAYKscrS_JYvWP4KpMsF_jI5Bg",
  authDomain: "react-slack-clone.firebaseapp.com",
  databaseURL: "https://react-slack-clone.firebaseio.com",
  projectId: "react-slack-clone",
  storageBucket: "react-slack-clone.appspot.com",
  messagingSenderId: "423395756405"
}; */
var config = {
  apiKey: "AIzaSyB9CGh655UW5jA80Z4YRbPy0zGcPJ4NqYM",
  authDomain: "react-slack-clone123.firebaseapp.com",
  databaseURL: "https://react-slack-clone123.firebaseio.com",
  projectId: "react-slack-clone123",
  storageBucket: "react-slack-clone123.appspot.com",
  messagingSenderId: "95119237965",
  appId: "1:95119237965:web:c8f36cd287401ede"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
