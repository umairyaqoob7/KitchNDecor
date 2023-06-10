
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBjPiGaKfxBAtSGzGOuxleydUbHlJIGqzw",
  authDomain: "kitch-n-decor.firebaseapp.com",
  projectId: "kitch-n-decor",
  storageBucket: "kitch-n-decor.appspot.com",
  messagingSenderId: "473129283928",
  appId: "1:473129283928:web:0f50c3d6359741f92e352d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db =getFirestore(app);
const storage=getStorage(app);

export {storage, db};
