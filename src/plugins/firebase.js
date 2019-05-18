import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/messaging";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyDr3RNGk-3IZNrFC8sVRIzGHyv7vkP99IA",
  authDomain: "dimigonia.firebaseapp.com",
  databaseURL: "https://dimigonia.firebaseio.com",
  projectId: "dimigonia",
  storageBucket: "dimigonia.appspot.com",
  messagingSenderId: "1080384914673",
  appId: "1:1080384914673:web:62be19b4aa7eb04b"
};

firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
let db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

db.enablePersistence({ experimentalTabSynchronization: true });

const storage = firebase.storage();

export default {
  db,
  storage
};
