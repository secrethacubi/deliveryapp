import { initializeApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzPq4TXhlAEvMJKL9XmjFbSX6a6N7ziww",
  authDomain: "react-native-hacubi.firebaseapp.com",
  projectId: "react-native-hacubi",
  storageBucket: "react-native-hacubi.appspot.com",
  messagingSenderId: "656745253393",
  appId: "1:656745253393:web:d672724d1b6f3b91e33fb0",
  measurementId: "G-MBGW8TH6FE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { auth };

// const app = initializeApp(firebaseConfig);

// export default app;
