import React from 'react';

import { Route } from 'react-router-dom';

import { connect } from 'react-redux';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching, selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

//since this component is rendered through ROUTE which is in app.js,
//it has access to match, history and loaction props
class ShopPage extends React.Component  {

	componentDidMount() {
		const { fetchCollectionsStartAsync } = this.props;
		fetchCollectionsStartAsync();
	}
	
	render() {
	
		const { match, isCollectionFetching, isCollectionLoaded } = this.props;

		return (
			<div className="shop-page">
				<Route exact path={`${match.path}`}  
					render={ (props) => <CollectionOverviewWithSpinner 
						isLoading={isCollectionFetching} 
						{...props} /> 
					} 
				/>
				
				{/* 
					if isCollectionLoaded is false means no shop.collections value is null, 
					so we want the loader to run for which loading value must be true
					hence isLoading{!!isCollectionLoaded}
				*/}
				<Route path={`${match.path}/:collectionId`} 
					render={ (props) => <CollectionPageWithSpinner 
						isLoading={!isCollectionLoaded}
						{...props} /> 
					} 
				/>
			</div> 
		);
	}	
} 

const mapStateToProps = state => ({
	isCollectionFetching: selectIsCollectionFetching(state),
	isCollectionLoaded: selectIsCollectionLoaded(state)
});

const mapDispatchToProps = dispatch => ({
	fetchCollectionsStartAsync: () => dispatch( fetchCollectionsStartAsync() )
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);