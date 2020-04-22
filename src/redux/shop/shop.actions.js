import ShopActionTypes from './shop.types';

import { firestore, convertCollectionsSnapshotsToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
	payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
	payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
	return dispatch => {
		//accessing "collections" from firebase
		const collectionRef = firestore.collection('collections')
		dispatch(fetchCollectionsStart());
		
		//instead of using inbuilt method "onSnapshot", we are using promises here
		collectionRef.get().then( snapShot => {
			const collectionsMap = convertCollectionsSnapshotsToMap(snapShot);
			dispatch( fetchCollectionsSuccess(collectionsMap) );
		}).catch( error => dispatch( fetchCollectionsFailure(error.message) ) );
	}
}
