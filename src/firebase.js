// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyB49Swe43lIlWjlPpYmIcLAGdM6kq9cK6k',
    authDomain: 'react-training-4b3f3.firebaseapp.com',
    databaseURL:
        'https://react-training-4b3f3-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'react-training-4b3f3',
    storageBucket: 'react-training-4b3f3.firebasestorage.app',
    messagingSenderId: '465668721322',
    appId: '1:465668721322:web:9e25d05b291d8a2a719ed3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);