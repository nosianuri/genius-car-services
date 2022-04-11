// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH8sY1z94bw89WYn5_PptWxeA0Diywdmw",
  authDomain: "genius-car-services-5108b.firebaseapp.com",
  projectId: "genius-car-services-5108b",
  storageBucket: "genius-car-services-5108b.appspot.com",
  messagingSenderId: "429591979920",
  appId: "1:429591979920:web:fb7037b54137652dbc3515"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;