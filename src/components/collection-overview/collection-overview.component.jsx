import React from 'react';
import { connect } from 'react-redux';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'

import './collection-overview.styles.scss'
import CollectionPreview from '../collection-preview/collection-preview.component'

const CollectionOverview = ( {collections} ) => {
	return (
		<div className='collection-overview'>  
		{   
			collections.map( ({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))
		}
		</div>
	);
}

const mapStateToProps = state => ({
	collections: selectCollectionsForPreview(state)
});

export default connect(mapStateToProps)(CollectionOverview);