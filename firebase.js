import firebase from "firebase/app";
require("firebase/auth");
//import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASE0RIh2aCAk4IMf9INoVrmHzdlmgINRo",
  authDomain: "whatsapp-clone-nextjs-d69c0.firebaseapp.com",
  projectId: "whatsapp-clone-nextjs-d69c0",
  storageBucket: "whatsapp-clone-nextjs-d69c0.appspot.com",
  messagingSenderId: "327582533396",
  appId: "1:327582533396:web:b48c8b1fc33a79ce966401",
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
