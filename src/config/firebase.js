import firebase  from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/messaging';

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

export const fireMessage = firebase.messaging();

export default firebaseApp;

const { REACT_APP_VAPID_KEY } = process.env

const publicKey = REACT_APP_VAPID_KEY;

export const getToken = async (setTokenFound) => {
  let currentToken = '';
  try {
    currentToken = await fireMessage.getToken({vapidKey: publicKey});
    if (currentToken) {
      setTokenFound(true);
    } else {
      setTokenFound(false);
    }
  } catch (error) {
    console.log('An error occurred while retrieving token.', error);
  }
  return currentToken;
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    fireMessage.onMessage((payload) => {
      resolve(payload);
    });
  });


