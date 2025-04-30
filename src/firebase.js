// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAEPlmRfY4-EEvYe384rQv0y7v3ZzPiZok",
    authDomain: "smartirrigationapp-19b06.firebaseapp.com",
    databaseURL: "https://smartirrigationapp-19b06-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "smartirrigationapp-19b06",
    storageBucket: "smartirrigationapp-19b06.appspot.com",
    messagingSenderId: "517336013091",
    appId: "1:517336013091:android:d1c09051adc7f9f71ad496"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, onValue };