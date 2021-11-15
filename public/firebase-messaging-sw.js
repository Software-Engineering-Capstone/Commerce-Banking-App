
// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyDOuFsyPtXaeMZuE-dZiGMftv-CTgKrj60",
  authDomain: "commerce-app-f07c4.firebaseapp.com",
  databaseURL: "https://commerce-app-f07c4-default-rtdb.firebaseio.com",
  projectId: "commerce-app-f07c4",
  storageBucket: "commerce-app-f07c4.appspot.com",
  messagingSenderId: "243771325381",
  appId: "1:243771325381:web:c321eac4be1e73025029ac"
};

firebase.initializeApp(firebaseConfig)

const messaging = firebase.messaging()

messaging.onBackgroundMessage(function (payload) {
  console.log("Recieved background message ", payload)

  const notificationTitle = payload.notification.title
  const notificationBody = {
    body: payload.notification.body,
    icon: "/globeLogo.png"
  }

  return self.ServiceWorkerRegistration.showNotification(
    notificationTitle,
    notificationBody
  )
})