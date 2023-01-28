import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCqItcyYxeQClvtAAjgJkgVkIMl8szxgJE",
    authDomain: "fir-messaging-48ebf.firebaseapp.com",
    databaseURL: "https://fir-messaging-48ebf.firebaseio.com",
    projectId: "fir-messaging-48ebf",
    storageBucket: "fir-messaging-48ebf.appspot.com",
    messagingSenderId: "244187836730",
    appId: "1:244187836730:web:0f22ec5f5f40b94648e003",
    measurementId: "G-LP3W0ETY7N"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const auth = app.auth()
const db = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp()

export { auth, db, timestamp }