import firebase  from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyDOuFsyPtXaeMZuE-dZiGMftv-CTgKrj60",
    authDomain: "commerce-app-f07c4.firebaseapp.com",
    databaseURL: "https://commerce-app-f07c4-default-rtdb.firebaseio.com",
    projectId: "commerce-app-f07c4",
    storageBucket: "commerce-app-f07c4.appspot.com",
    messagingSenderId: "243771325381",
    appId: "1:243771325381:web:c321eac4be1e73025029ac"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const fireDb = firebaseApp.database().ref();

export default firebaseApp;
