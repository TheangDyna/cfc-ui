import firebase from 'firebase/app';
import "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDpAIRU9DqlRxJzdyaTy6xZ_z0BIWzykhU",
  authDomain: "cfc-alumni.firebaseapp.com",
  projectId: "cfc-alumni",
  storageBucket: "cfc-alumni.appspot.com",
  messagingSenderId: "316101627809",
  appId: "1:316101627809:web:a249953eb076f17d1305e0",
  measurementId: "G-T6GHYXH2JT"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)

}
const fireStorage = firebase.storage();

export {
  fireStorage,
};