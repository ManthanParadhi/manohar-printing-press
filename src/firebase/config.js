import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyC8ZiFmmt9KNsU6Hf6hXHgCgXn6a85qDPs",
    authDomain: "manoharprintingpress-ba5d9.firebaseapp.com",
    projectId: "manoharprintingpress-ba5d9",
    storageBucket: "manoharprintingpress-ba5d9.appspot.com",
    messagingSenderId: "1039889963054",
    appId: "1:1039889963054:web:3b448a39c13aa4fbc867bf",
    measurementId: "G-SDN30BPSM2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };