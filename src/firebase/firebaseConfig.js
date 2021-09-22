export const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIRBASE_API_KEY,
    authDomain: 'lafayette-covid-tracker.firebaseapp.com',
    projectId: 'lafayette-covid-tracker',
    storageBucket: 'lafayette-covid-tracker.appspot.com',
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};
