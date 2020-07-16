import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAjO4ROfcHJ5BsgGf7_7Lwz4MoJokxxO9M",
  authDomain: "crown-db-115da.firebaseapp.com",
  databaseURL: "https://crown-db-115da.firebaseio.com",
  projectId: "crown-db-115da",
  storageBucket: "crown-db-115da.appspot.com",
  messagingSenderId: "679390045510",
  appId: "1:679390045510:web:89ee183fe47803ed05b147",
  measurementId: "G-4XD8TLSVQN",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdDate = new Date();

    await userRef.set({
      displayName,
      email,
      createdDate,
      ...additionalData,
    });
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
