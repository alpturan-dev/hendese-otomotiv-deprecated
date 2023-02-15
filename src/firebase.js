import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage } from 'firebase/storage';
import toast from 'react-hot-toast';


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
const auth = getAuth();
export const login = async (email, password) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        return user;
    } catch (error) {
        toast.error(error.message);
    }
}

export const logout = async () => {
    try {
        await signOut(auth);
        localStorage.removeItem('user');
        return true;
    } catch (error) {
        toast.error(error.message);
    }
}
