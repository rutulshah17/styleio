import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAd-Z3WJ04PeKo1Yz6ncA8ZGPr3HcLMFZg",
    authDomain: "crwn-db-b97aa.firebaseapp.com",
    databaseURL: "https://crwn-db-b97aa.firebaseio.com",
    projectId: "crwn-db-b97aa",
    storageBucket: "crwn-db-b97aa.appspot.com",
    messagingSenderId: "464695615739",
    appId: "1:464695615739:web:9054ec54f7595a8a91505e",
    measurementId: "G-SH4B7T4SV2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//opens up prompt before authenticating
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( {prompt: 'select_account'} );

//we want google prompt so,
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;