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

export const getToken = async (setTokenFound) => {
  let currentToken = '';
  try {
    currentToken = await fireMessage.getToken({vapidKey: "BECXrsxa0073RnL98pqpB5AzZ8swinN1FICLd24ZVyXoc6YUbfA0RWHCqfUHiMGAP3wD01y_J-uKVT7RRNCP8is"});
    if (currentToken) {
      setTokenFound(true);
      console.log("Token set")
    } else {
      setTokenFound(false);
    }
  } catch (error) {
    console.log('An error occurred while retrieving token.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', error);
  }
  return currentToken;
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    fireMessage.onMessage((payload) => {
      resolve(payload);
    });
  });


  export default firebaseApp;