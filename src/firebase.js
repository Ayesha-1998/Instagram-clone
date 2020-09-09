import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDRMw7SzpfZJSNlj2A2r0r1FfSfWizmAOs",
  authDomain: "instagram-first1.firebaseapp.com",
  databaseURL: "https://instagram-first1.firebaseio.com",
  projectId: "instagram-first1",
  storageBucket: "instagram-first1.appspot.com",
  messagingSenderId: "457302747045",
  appId: "1:457302747045:web:71c84684fbf659c9ba2a4c",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

// export default db;
