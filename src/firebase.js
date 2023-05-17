import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA3IsRVic7VnVLol8pXPdAZtyT2EUITDsE",
  authDomain: "disneyplusclone-cc8ec.firebaseapp.com",
  projectId: "disneyplusclone-cc8ec",
  storageBucket: "disneyplusclone-cc8ec.appspot.com",
  messagingSenderId: "571943080541",
  appId: "1:571943080541:web:3ee0016b5bbf8892d233b4",
  measurementId: "G-MW02CS06SZ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
