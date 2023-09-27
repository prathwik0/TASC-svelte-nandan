// Import the functions you need from the SDKs you need
import {getApps, getApp, deleteApp, initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: import.meta.env.api_key,
    authDomain: import.meta.env.auth_domain,
    projectId: import.meta.env.project_Id,
    storageBucket: import.meta.env.storage_Bucket,
    messagingSenderId: import.meta.env.messaging_Sender_Id,
    appId: import.meta.env.app_Id,
    measurementId: import.meta.env.measurement_Id
};

// Initialize Firebase
let app;
if(!getApps().length){
    app = initializeApp(firebaseConfig);
} else{
    app = getApp();
    deleteApp(app);
    app = initializeApp(firebaseConfig);
}

export const db = getFirestore(app);
// const analytics = getAnalytics(app);