import React from 'react';

import { Route } from 'react-router-dom';

import { connect } from 'react-redux';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

import { updateCollections } from '../../redux/shop/shop.actions'

import { firestore, convertCollectionsSnapshotsToMap } from '../../firebase/firebase.utils'

//since this component is rendered through ROUTE which is in app.js,
//it has access to match, history and loaction props
class ShopPage extends React.Component  {
	
	unsubsscribeFromSnapshot = null;

	componentDidMount() {

		const { updateCollections } = this.props

		//accessing "collections" from firebase
		const collectionRef = firestore.collection('collections')
		collectionRef.onSnapshot( async snapShot => {
			const collectionsMap = convertCollectionsSnapshotsToMap(snapShot);
			updateCollections(collectionsMap);
		});

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

const mapDispatchToProps = dispatch => ({
	updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);