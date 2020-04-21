import React from 'react';

import { Route } from 'react-router-dom';

import { connect } from 'react-redux';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { updateCollections } from '../../redux/shop/shop.actions'

import { firestore, convertCollectionsSnapshotsToMap } from '../../firebase/firebase.utils'

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

//since this component is rendered through ROUTE which is in app.js,
//it has access to match, history and loaction props
class ShopPage extends React.Component  {

	state = {
		loading: true
	}

	unsubsscribeFromSnapshot = null;

	componentDidMount() {

		const { updateCollections } = this.props

		//accessing "collections" from firebase
		const collectionRef = firestore.collection('collections')
		collectionRef.onSnapshot( async snapShot => {
			const collectionsMap = convertCollectionsSnapshotsToMap(snapShot);
			updateCollections(collectionsMap);
			this.setState({ loading: false });
		});

	}
	
	render() {
	
		const { match } = this.props;
		const { loading } = this.state;

		return (
			<div className="shop-page">
				<Route exact path={`${match.path}`}  
					render={ (props) => <CollectionOverviewWithSpinner 
						isLoading={loading} 
						{...props} /> 
					} 
				/>
				
				<Route path={`${match.path}/:collectionId`} 
					render={ (props) => <CollectionPageWithSpinner 
						isLoading={loading} 
						{...props} /> 
					} 
				/>
			</div> 
		);
	}	
} 

const mapDispatchToProps = dispatch => ({
	updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);