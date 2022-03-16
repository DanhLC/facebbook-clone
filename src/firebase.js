import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUKgqLn2o_RY_GBVwFumpKH0wrzbuQVmQ",
  authDomain: "facebookclone-c91fe.firebaseapp.com",
  projectId: "facebookclone-c91fe",
  storageBucket: "facebookclone-c91fe.appspot.com",
  messagingSenderId: "470012233843",
  appId: "1:470012233843:web:16f89edb692fe0b61bc206",
  measurementId: "G-ST14V35XTL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;