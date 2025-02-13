// firebase.config.js
const firebaseConfig = {
    apiKey: "AIzaSyBEykuAfmeHg-fqLBxyt8SipVjIcPdU8_Y",
    authDomain: "superhuman-69ddf.firebaseapp.com",
    databaseURL: "https://superhuman-69ddf-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "superhuman-69ddf",
    storageBucket: "superhuman-69ddf.firebasestorage.app",
    messagingSenderId: "932793082008",
    appId: "1:932793082008:web:9aa8296cce7d42dae230ed",
    measurementId: "G-X5G8373WHW"
};

// For service worker (firebase-messaging-sw.js)
// This ensures the config is available in both module and non-module contexts
if (typeof self !== 'undefined') {
    self.firebaseConfig = firebaseConfig;
}