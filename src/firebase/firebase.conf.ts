import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
//  https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4fgKm1iC5BXK6k8_gHRbNsUMHw85Uj90",
  authDomain: "school-98c38.firebaseapp.com",
  projectId: "school-98c38",
  storageBucket: "school-98c38.appspot.com",
  messagingSenderId: "843939193470",
  appId: "1:843939193470:web:4ac7e9e4171c6116b52e2f",
  measurementId: "G-PYL58S2FF5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// ? CREATE AUTH
export const auth = getAuth(app)


//const analytics = getAnalytics(app);