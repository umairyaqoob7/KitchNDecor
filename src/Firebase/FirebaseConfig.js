import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBjPiGaKfxBAtSGzGOuxleydUbHlJIGqzw",
  authDomain: "kitch-n-decor.firebaseapp.com",
  projectId: "kitch-n-decor",
  storageBucket: "kitch-n-decor.appspot.com",
  messagingSenderId: "473129283928",
  appId: "1:473129283928:web:0f50c3d6359741f92e352d"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase }