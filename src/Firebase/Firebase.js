// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIYFKZ9SnFM-VyR6qvx5i4lXnYEwlnO2g",
  authDomain: "travo-trip.firebaseapp.com",
  projectId: "travo-trip",
  storageBucket: "travo-trip.appspot.com",
  messagingSenderId: "485893414478",
  appId: "1:485893414478:web:706b77427a0bf07e8e6d1f",
  measurementId: "G-FQDQ3V8RG9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
