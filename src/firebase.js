import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBG1laPjPGHOi1yqRgVyYun-4xX01Lo0dw",
  authDomain: "discord-clone-3c7d5.firebaseapp.com",
  projectId: "discord-clone-3c7d5",
  storageBucket: "discord-clone-3c7d5.appspot.com",
  messagingSenderId: "185815230616",
  appId: "1:185815230616:web:915cbfd2bce1d198aa88ed",
  measurementId: "G-ZL53T89L6M",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

export { auth, provider };
export default db;
