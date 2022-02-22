// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {};

// // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// const app = firebase.initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// const projectStorage = firebase.storage();
// const auth = firebase.firestore();
// const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// export { app, projectStorage, auth, timestamp };

const app = firebase.initializeApp({
  // ****************** Firebase configuration ***********************
  // apiKey: "AIzaSyCzdxL13GgcPZvzjwsUXhTKuCHYbJ3BzKc",
  // authDomain: "blog-5ab4d.firebaseapp.com",
  // projectId: "blog-5ab4d",
  // storageBucket: "blog-5ab4d.appspot.com",
  // messagingSenderId: "341626019964",
  // appId: "1:341626019964:web:74824e210b130e619369f9",
  // measurementId: "G-BBX192ECLL",
});
export const auth = app.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export default app;
