import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMeLk52CgrijpgT0oucJ65SMJQ2WIIR1M",
  authDomain: "fb-clone-93084.firebaseapp.com",
  projectId: "fb-clone-93084",
  storageBucket: "fb-clone-93084.appspot.com",
  messagingSenderId: "538821391526",
  appId: "1:538821391526:web:2ee98fac00198153d87067",
  measurementId: "G-VYQPNQVPZR",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
