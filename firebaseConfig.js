import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
 
// Initialize Firebase
const app = initializeApp({
    apiKey: "AIzaSyAzZnYWtJ7wTm1Rkcw0PJE5kX1GOXlRUi0",
    authDomain: "tutiendafacil-9ddb6.firebaseapp.com",
    projectId: "tutiendafacil-9ddb6",
    storageBucket: "tutiendafacil-9ddb6.appspot.com",
    messagingSenderId: "341766574239",
    appId: "1:341766574239:web:11c8d93e8bc00278c0d2aa"
  })
 
// Firebase storage reference
const storage = getStorage(app);
export default storage;