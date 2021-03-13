import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBwIi5hjkBriJycpIT62I6V_dTafyPNx9Q",
  authDomain: "ecommercedemoreact.firebaseapp.com",
  projectId: "ecommercedemoreact",
  storageBucket: "ecommercedemoreact.appspot.com",
  messagingSenderId: "888204440092",
  appId: "1:888204440092:web:823e29beda02d1ec5ce5d9",
  measurementId: "G-3D0P9BPECR",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfile = async (user, displayName) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);

  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email } = user;
    const createdAt = new Date();

    try {
      await firestore.doc(`users/${user.uid}`).set({
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(`failed to create user profile ${error.messgae}`);
    }
  }

  return userRef;
};

export default firebase;
