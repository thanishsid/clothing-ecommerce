import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA0fcr1zO8QjuzBkVfNHozwiPa--4bLR24',
  authDomain: 'clothing-ecommerce-e2224.firebaseapp.com',
  projectId: 'clothing-ecommerce-e2224',
  storageBucket: 'clothing-ecommerce-e2224.appspot.com',
  messagingSenderId: '50421990131',
  appId: '1:50421990131:web:873b570d5d0b2c84c7ad86',
  measurementId: 'G-73YPBBY2TN',
};

const fBase = firebase.initializeApp(config);

export const auth = fBase.auth();
export const firestore = fBase.firestore();

//Google - Authentication Provider
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default fBase;
