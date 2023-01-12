// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyDjVjlcUKYUBb62x4K8WUGI47mXXlfKTtI",
    authDomain: "actingweb-firstapp.firebaseapp.com",
    databaseURL: "https://actingweb-firstapp.firebaseio.com",
    projectId: "actingweb-firstapp",
    storageBucket: "actingweb-firstapp.appspot.com",
    messagingSenderId: "748007732162",
    appId: "1:748007732162:web:ff42373829ce3137785c5b",
    measurementId: "G-M7F2YR6FNW"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((m) => {
    console.log("onBackgroundMessage", m);
});
