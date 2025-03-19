import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBf8oMg0M7uAfgmQx9nEeId8kvQm4ULQcA",
  authDomain: "expensync-project.firebaseapp.com",
  projectId: "expensync-project",
  storageBucket: "expensync-project.firebasestorage.app",
  messagingSenderId: "566110888811",
  appId: "1:566110888811:web:b3b9880fda253f22d5622e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("✅ Auth persistence set to local storage");
  })
  .catch((error) => {
    console.error("❌ Error setting auth persistence:", error);
  });
