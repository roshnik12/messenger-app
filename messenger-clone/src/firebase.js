import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

  apiKey: "AIzaSyB9XQl4UGUlKpS6GYXbrlGhLAikzBLnOmE",
  authDomain: "messenger-clone-374d0.firebaseapp.com",
  projectId: "messenger-clone-374d0",
  storageBucket: "messenger-clone-374d0.appspot.com",
  messagingSenderId: "95167901347",
  appId: "1:95167901347:web:afece56653d2734802d916"
});

const db = firebaseApp.firestore();
export default db;
