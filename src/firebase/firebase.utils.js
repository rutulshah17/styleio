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

//we have to pass the entire auth object which was grabbed in APP.JS under auth.onAuthStateChanged()
//so that we can extract unique user id, email id, name etc from that object
//since below function would be an API call, we have to make it Async function or use promise,
// we will use async function here

//createUserProfileDocument() is checking if there is any user in the firestore, it not create one
export const createUserProfileDocument = async (userAuth, additionalData) => {

	//if user is not signed in or cannot get the whole user object, just return
	if(!userAuth) return;

	//else go to users/user.uid in firestore to grab the value, 
	//you always get actual data from snapshot(userRef.get()) of document/collection
	//if it(snapshot) exist, grab it
	//userRef is document reference -> set() get() update() delete()
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	//if snapShot does not exist, create new user
	if(!snapShot.exists) {

		//destructuring the code so that we do not have to write 
		//userAuth.displayName and userAuth.email everytime
		const {displayName, email} = userAuth;
		
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}
	//helpful in App.js
	return userRef;

};

//func to make new collections and docs and push it to firestore
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
	const collectionRef = firestore.collection(collectionKey);
	console.log(collectionRef);

	const batch = firestore.batch();
	objectsToAdd.forEach(obj => {
		//setting unique id
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj)

	});

	return await batch.commit();

}

export const convertCollectionsSnapshotsToMap = (collections) => {
	const transformedCollection = collections.docs.map( doc => {
		const { title, items } = doc.data();

		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items
		}
	});

	console.log(transformedCollection);

}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//opens up prompt before authenticating
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( {prompt: 'select_account'} );

//we want google prompt so,
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;