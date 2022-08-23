import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBH2sDFzRzs_gYVFz9NREgh_ckMsTEjAaQ",
    authDomain: "e-clone-b0b92.firebaseapp.com",
    projectId: "e-clone-b0b92",
    storageBucket: "e-clone-b0b92.appspot.com",
    messagingSenderId: "522541494967",
    appId: "1:522541494967:web:45bbd1e129f4fa6b0ad332",
    measurementId: "G-ZEDHNFF9ZF"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
export {db, auth}