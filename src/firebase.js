import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBc8YAJD2ymj0Pn4sKuq6FB0toA91zbXvk",
  authDomain: "fb-clone-32be5.firebaseapp.com",
  databaseURL: "https://fb-clone-32be5.firebaseio.com",
  projectId: "fb-clone-32be5",
  storageBucket: "fb-clone-32be5.appspot.com",
  messagingSenderId: "896905591520",
  appId: "1:896905591520:web:c22b470c331cc93200ae85",
  measurementId: "G-P57C89ZSGP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
