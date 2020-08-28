import firebase from "firebase";
// import firestore from "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCVW0EFKOSk5IbI6EqoQIVmwY6Aumb5ZPg",
  authDomain: "log-message.firebaseapp.com",
  databaseURL: "https://log-message.firebaseio.com",
  projectId: "log-message",
  storageBucket: "log-message.appspot.com",
  messagingSenderId: "979245957670",
  appId: "1:979245957670:web:7ca77816f2c6973b18dce7",
  measurementId: "G-G9DBGDKWG1",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
