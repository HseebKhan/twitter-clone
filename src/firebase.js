import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC7ZPcp284K36U65m7SEbN26pnDN-_Sh-g",
  authDomain: "twitter-clone-62ef5.firebaseapp.com",
  databaseURL: "https://twitter-clone-62ef5.firebaseio.com",
  projectId: "twitter-clone-62ef5",
  storageBucket: "twitter-clone-62ef5.appspot.com",
  messagingSenderId: "689297587134",
  appId: "1:689297587134:web:3f154b650e4e43d6c357ef",
  measurementId: "G-83P9TGZP0N",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
