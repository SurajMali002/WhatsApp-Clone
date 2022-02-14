import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCoglU28CX8Kr7fYw0724-LaBYY10lMIJU",
  authDomain: "whatsapp-4b2d7.firebaseapp.com",
  projectId: "whatsapp-4b2d7",
  storageBucket: "whatsapp-4b2d7.appspot.com",
  messagingSenderId: "127102393837",
  appId: "1:127102393837:web:1d3ed02f8bb729e1719be4"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
