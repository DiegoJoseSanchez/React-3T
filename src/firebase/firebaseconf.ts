// Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAqG1FvNZTD4dVYIyj2U1vyM0u-XpZeiMU",
  authDomain: "story-d7aaa.firebaseapp.com",
  projectId: "story-d7aaa",
  storageBucket: "story-d7aaa.appspot.com",
  messagingSenderId: "83160446206",
  appId: "1:83160446206:web:0774eb05c1d9aaf4b521af",
  measurementId: "G-1NF14TDPZ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);