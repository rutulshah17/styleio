import React from 'react';

import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

import { firestore, convertCollectionsSnapshotsToMap } from '../../firebase/firebase.utils'

//since this component is rendered through ROUTE which is in app.js,
//it has access to match, history and loaction props
class ShopPage extends React.Component  {
	
	unsubsscribeFromSnapshot = null;

	componentDidMount() {
		const collectionRef = firestore.collection('collections')
		
		collectionRef.onSnapshot( async snapShot => {
			convertCollectionsSnapshotsToMap(snapShot);
		})

	}
	
	render() {
	
		const { match } = this.props;

		return (
			<div className="shop-page">
				<Route exact path={`${match.path}`}  component={CollectionOverview} />
				<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
			</div> 
		);
	}	
} 

export default ShopPage;