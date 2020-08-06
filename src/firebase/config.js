import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyD2YHDht-K7rbTaNyS6k4pzD0MUhmcqpec",
  authDomain: "photo-portfolio-813ac.firebaseapp.com",
  databaseURL: "https://photo-portfolio-813ac.firebaseio.com",
  projectId: "photo-portfolio-813ac",
  storageBucket: "photo-portfolio-813ac.appspot.com",
  messagingSenderId: "1013038737525",
  appId: "1:1013038737525:web:60fa3c4e269e77ac4eb03c",
  measurementId: "G-BTQR2V2GZY",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { projectStorage, projectFirestore, timestamp };
