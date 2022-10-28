// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBDFlF7hEl_cTyb64eF8PYbOT5-2y1y02g",
    authDomain: "learning-platform-assign-d8f5b.firebaseapp.com",
    projectId: "learning-platform-assign-d8f5b",
    storageBucket: "learning-platform-assign-d8f5b.appspot.com",
    messagingSenderId: "8135132406",
    appId: "1:8135132406:web:767408f36f9d25eb9b18d7",
    measurementId: "G-NVSCEVWGFQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;