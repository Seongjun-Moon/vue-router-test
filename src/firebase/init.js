import firebase from "firebase";

// Your web app's Firebase configuration
var config = {
  apiKey: process.env.VUE_APP_FIREBASE_KEY,
  authDomain: "t4ir-blockchain-test-3ee1c.firebaseapp.com",
  databaseURL: "https://t4ir-blockchain-test-3ee1c.firebaseio.com",
  projectId: "t4ir-blockchain-test-3ee1c",
  storageBucket: "t4ir-blockchain-test-3ee1c.appspot.com",
  messagingSenderId: "951163282966",
  appId: "1:951163282966:web:f39ca57ab5a214a560f737",
  measurementId: "G-1RDMFREJ5Z",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();
