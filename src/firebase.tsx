import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlsdIODuFY3fZQF7oFIn1D6W4msZtLQ8M",
  authDomain: "quizapp-9a366.firebaseapp.com",
  projectId: "quizapp-9a366",
  storageBucket: "quizapp-9a366.appspot.com",
  messagingSenderId: "1028737921017",
  appId: "1:1028737921017:web:b138dbd73d9129323e1728",
};

// 初期化は一度だけ
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();